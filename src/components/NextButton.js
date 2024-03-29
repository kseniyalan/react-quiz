const NextButton = ({dispatch, answer}) => {
  if (answer === null) return null;

  return (
    // Your JSX code goes here
    <button
      type="button"
      className="btn btn-ui"
      onClick={() => dispatch({type: 'NEXT_QUESTION'})}
    >
      Next
    </button>
  );
};

export default NextButton;