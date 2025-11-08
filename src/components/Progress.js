function Progress({ numQuestions, index, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <string>{points}</string> / {totalPoints} points
      </p>
    </header>
  );
}

export default Progress;
