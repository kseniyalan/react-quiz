function Progress({ currentQuestion, total, points, maxPoints, answer}) {
  return (
    <section className="progress">
      <progress
        value={currentQuestion + Number(answer !== null)}
        max={total}
        aria-label="Quiz progress"
      />
      <p>Question {currentQuestion + 1} / {total} </p>
      <p><strong>{points}</strong> / {maxPoints}</p>
    </section>
  );
}

export default Progress;