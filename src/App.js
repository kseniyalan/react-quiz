import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished
  status: 'loading',
  currentQuestion: 0,
  answers: [],
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
    default:
      throw new Error('Unknown action type');
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
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
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  );
}
