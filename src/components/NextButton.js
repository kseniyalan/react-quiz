const NextButton = ({dispatch, answer, currentQuestion, total}) => {
  if (answer === null) return null;

  if (currentQuestion < total - 1) return (
    <button
      type="button"
      className="btn btn-ui"
      onClick={() => dispatch({type: 'NEXT_QUESTION'})}
    >
      Next
    </button>
  );

    if (currentQuestion === total - 1) return (
    <button
      type="button"
      className="btn btn-ui"
      onClick={() => dispatch({type: 'FINISH_QUIZ'})}
    >
      Finish
    </button>
  );
};

export default NextButton;