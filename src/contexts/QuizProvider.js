import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const SECS_PER_QUESTION = 30;

const initalState = {
  questions: [],

  // 'loading', 'ready', 'error', 'active', 'finished'
  status: "loadng",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 10,

  // easy, mediam, hard ==> classification based on the points for each question (10 easy, 20 mediam, 30 hard).
  difficulty: "",
  filterdQuestions: [],

  answers: [],
  hasFinished: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        filterdQuestions: action.payload,
        status: "ready",
      };

    case "dataFaild":
      return { ...state, status: "error" };

    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.filterdQuestions.length * SECS_PER_QUESTION,

        hasFinished: false,
      };

    case "newAnswer":
      const currentQuestion = state.filterdQuestions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === currentQuestion.correctOption
            ? state.points + currentQuestion.points
            : state.points,

        answers: [...state.answers, action.payload],
      };

    case "nextQuestion":
      if (state.hasFinished) {
        return {
          ...state,
          index: state.index + 1,
          answer: state.answers[state.index + 1],
        };
      }

      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,

        hasFinished: true,
      };

    case "restart":
      console.log(state.questions);
      return {
        ...initalState,
        questions: state.questions,
        filterdQuestions: state.questions,
        status: "ready",
      };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    case "difficulty":
      state.difficulty = action.payload;

      if (state.difficulty === "easy") {
        state.filterdQuestions = state.questions.filter(
          (question) => question.points === 10
        );
      } else if (state.difficulty === "medium") {
        state.filterdQuestions = state.questions.filter(
          (question) => question.points === 20
        );
      } else if (state.difficulty === "hard") {
        state.filterdQuestions = state.questions.filter(
          (question) => question.points === 30
        );
      } else {
        state.filterdQuestions = state.questions;
      }

      return {
        ...state,
      };

    case "reviewAnswers":
      return {
        ...state,
        status: "active",
        index: 0,
        answer: state.answers[0],
      };

    case "previousQuestion":
      if (state.hasFinished) {
        return {
          ...state,
          index: state.index - 1,
          answer: state.answers[state.index - 1],
        };
      }
      return;

    default:
      throw new Error("Action unknown");
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initalState);

  const {
    questions,
    status,
    index,
    answer,
    points,
    highscore,
    secondsRemaining,
    difficulty,
    filterdQuestions,
    answers,
    hasFinished,
  } = state;
  const numQuestions = filterdQuestions.length;
  const totalPoints = filterdQuestions.reduce(
    (acc, cur) => acc + cur.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "dataReceived", payload: data });
      })
      .catch((err) => {
        console.log("Error: ", err);
        dispatch({ type: "dataFaild" });
      });
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        numQuestions,
        totalPoints,
        dispatch,
        difficulty,
        answers,
        hasFinished,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizProvider is used to outside out QuizContext");

  return context;
}

export { QuizProvider, useQuiz };
