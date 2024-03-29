function Options({question, dispatch, answer}) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={index}
          type="button"
          disabled={hasAnswered}
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${hasAnswered ? index === question.correctOption ? 'correct' : 'wrong' : ''}`}
          onClick={() => dispatch({type: 'QUESTION_ANSWER', payload: index})}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;