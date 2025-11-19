import { useQuiz } from "../contexts/QuizProvider";

function PreviousButton() {
  const { dispatch, index } = useQuiz();

  if (index === 0) return;

  return (
    <button
      className="btn btn-ui prev-btn"
      onClick={() => dispatch({ type: "previousQuestion" })}
    >
      Previous
    </button>
  );
}

export default PreviousButton;
