import Options from "./Options";

function Question({ question, dispatch, answer, hasFinished, answers }) {
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
