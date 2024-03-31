function FinishScreen({ points, maxPoints, highscore, dispatch}) {
  const persentage = (points / maxPoints) * 100;
    let emoji;
    if (persentage === 100) emoji = '🥇';
    else if (persentage >= 80) emoji = '🥈';
    else if (persentage >= 60) emoji = '🥉';
    else if (persentage >= 40) emoji = '👍';
    else if (persentage > 0 && persentage < 40) emoji = '😐';
    else if (persentage === 0) emoji = '👎';

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of {maxPoints} ({Math.ceil(persentage)}%)
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
      <button
        type="button"
        className="btn btn-ui"
        onClick={() => dispatch({type: 'RESTART_QUIZ'})}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;