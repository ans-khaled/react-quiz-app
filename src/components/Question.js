import { useQuiz } from "../contexts/QuizProvider";
import Options from "./Options";

function Question() {
  const { questions, index, dispatch, answer, hasFinished, answers } =
    useQuiz();

  const question = questions[index];

  return (
    <div>
      <h3>{question.question}</h3>
      <Options
        question={question}
        dispatch={dispatch}
        answer={answer}
        hasFinished={hasFinished}
        answers={answers}
      />
    </div>
  );
}

export default Question;
