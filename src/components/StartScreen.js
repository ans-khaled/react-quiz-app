function StartScreen({ numQuestions, dispatch, difficulty }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>
        {numQuestions} question to test your React mastery
        {difficulty ? `(${difficulty} level)` : ""}
      </h3>

      <div className="filter-container">
        <label htmlFor="difficulty">Difficulty:</label>
        <select
          id="difficulty"
          onChange={(e) =>
            dispatch({ type: "difficulty", payload: e.target.value })
          }
        >
          <option value="">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "start" })}
        >
          Let's start
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
