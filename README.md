🎯 React Quiz App

A fully interactive React Quiz Application built with modern React patterns, including Context API, useReducer, and useEffect.
This project demonstrates clean architecture, scalable state management, reusable UI components, and production-level coding practices.

---

🚀 Core Features
📦 Dynamic Questions (Fake API Integration)

• Custom-built fake API for quiz questions.

• Questions are fetched dynamically when the app starts using useEffect.

🎚️ Filter by Difficulty

• Users can filter questions by: All, Easy, Medium, or Hard.

• Each difficulty level has its own point value, providing a more realistic quiz experience.

🧠 Global State with Context API

• Implemented React Context API to manage global quiz state without prop drilling.

• Context manages:

- Current question index

- User answers

- Quiz progress

- Score & highscore

- Selected difficulty filter

• Entire app reads state cleanly using useContext.

🏆 Dynamic Scoring System

• Scores are calculated based on question difficulty.

• Highscore is stored and updated across quiz attempts.

🔁 Review Mode

• After finishing the quiz, users can review all their answers.

• Navigation between questions using Next and Previous buttons.

🧩 Modular & Reusable Components

• Clean folder structure and naming conventions.

• UI components are reusable, composable, and separated from logic.

• Easy to scale and maintain.

---

🧠 Technical Highlights
• React Hooks

• useReducer → Managing complex state transitions in a predictable and clean way.

• useEffect → Handling side effects like data fetching.

• useContext → Global state management without prop drilling.

• Clean Code & Architecture

• Clear separation of UI and business logic.

• Fully modular components.

• Scalable state structure using reducers + context.

• Responsive and readable code with consistent styling.

---

💡 What I Learned

• Architecting a React app using Context API + useReducer.

• Managing global and complex state without external libraries.

• Building clean, reusable, and scalable UI components.

• Handling side effects and data fetching in React.

• Designing a quiz flow from start → play → finish → review.

---

⚙️ How to Run
# Clone the repository
git clone https://github.com/ans-khaled/react-quiz-app.git

# Navigate into the project
cd react-quiz-app

# Install dependencies
npm install

# Run the development server
npm run dev

---

🧑‍💻 Author

Anas Khaled Ahmed Mahmoud
Front-End Developer

Skills:
HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular, React

LinkedIn:
www.linkedin.com/in/anas-khaled-263b022ab
