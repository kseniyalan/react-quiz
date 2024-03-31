function FinishScreen({ points, maxPoints, highscore}) {
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
      <p className="highscore">Highscore: {highscore}%</p>
    </>
  );
}

export default FinishScreen;