import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import QuizModal from "./components/QuizModal/QuizModal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/survey" element={<QuizModal />} />
        </Routes>
      </BrowserRouter>
      {/* <button>Click me</button> */}
    </>
  );
}

export default App;
