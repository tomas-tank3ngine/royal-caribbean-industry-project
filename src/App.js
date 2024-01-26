import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SurveyPage from "./pages/SurveyPage/SurveyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/survey" element={<SurveyPage />} />
        </Routes>
      </BrowserRouter>
      {/* <button>Click me</button> */}
    </>
  );
}

export default App;
