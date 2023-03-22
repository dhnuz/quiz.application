import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Quiz from "./Components/Quiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/quiz" element={<Quiz />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
