import { useReducer } from "react";
const initialState = {count: 0, step: 1};

function reducer(state, action) {
  switch (action.type) {
    case "DECREMENT":
      return {...state, count: state.count - state.step};
    case "INCREMENT":
      return {...state, count: state.count + state.step};
    case "SET_COUNT":
      return {...state, count: action.payload};
    case "SET_STEP":
      return {...state, step: action.payload};
    case "RESET":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}

function DateCounter() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const {count, step} = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const decrement = function () {
    dispatch({ type: "DECREMENT" });
  };

  const increment = function () {
    dispatch({ type: "INCREMENT" });
   };

  const defineCount = function (e) {
    dispatch({type: "SET_COUNT", payload: Number(e.target.value)});
  };

  const defineStep = function (e) {
    dispatch({type: "SET_STEP", payload: Number(e.target.value)});
  };

  const reset = function () {
    dispatch({type: "RESET" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={decrement}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={increment}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
