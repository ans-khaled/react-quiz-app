import { useQuiz } from "../contexts/QuizProvider";

function Progress() {
  const { numQuestions, index, points, totalPoints, answer } = useQuiz();

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
