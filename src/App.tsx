import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import QuizPage from "./components/QuizPage";
import { goalText1, goalText2, SKILLS1, SKILLS2 } from "./utils/MockData";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/quiz/1"
          element={<QuizPage goalText={goalText1} options={SKILLS1} />}
        />
        <Route
          path="/quiz/2"
          element={<QuizPage goalText={goalText2} options={SKILLS2} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
