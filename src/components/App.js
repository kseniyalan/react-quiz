import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished
  status: 'loading',
  currentQuestion: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'QUESTIONS_SUCCESS':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'QUESTIONS_FAILED':
      return {
        ...state,
        status: 'error',
      };
    case 'QUIZ_START':
      return {
        ...state,
        status: 'active',
      };
    case 'QUESTION_ANSWER':
      const question = state.questions.at(state.currentQuestion);
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points,
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        answer: null,
      };

    default:
      throw new Error('Unknown action type');
  }
};

export default function App() {
  const [{ questions, status, currentQuestion, answer, points }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

  useEffect(() => {
  fetch("http://localhost:8000/questions")
    .then((response) => response.json())
    .then((data) => dispatch({ type: 'QUESTIONS_SUCCESS', payload: data }))
    .catch((error) => dispatch({ type: 'QUESTIONS_FAILED' }));
}, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && 
        <StartScreen
          numQuestions={numQuestions}
          dispatch={dispatch}
        />
        }
        {status === 'active' && (
          <>
            <Question
              question={questions[currentQuestion]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </Main>
    </div>
  );
}
