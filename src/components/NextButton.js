import { useQuiz } from "../contexts/QuizProvider";

function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();
  if (answer === null) return null;

  const hasFinished = index + 1 === numQuestions;

  function handleFinish() {
    if (hasFinished) {
      return dispatch({ type: "finish" });
    }

    return dispatch({ type: "nextQuestion" });
  }

  return (
    <button className="btn btn-ui" onClick={handleFinish}>
      {hasFinished ? "Finish" : "Next"}
    </button>
  );
}

export default NextButton;
