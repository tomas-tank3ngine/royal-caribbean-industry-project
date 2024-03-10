import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Loading from "./components/Loading/Loading";
import IteneraryPage from "./pages/IteneraryPage/IteneraryPage";
import QuizModal from "./components/QuizModal/QuizModal";
import PackageSelections from "./pages/PackageSelections/PackageSelections";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Loading" element={<Loading />} />

          <Route path="/survey" element={<QuizModal />} />
          <Route path="/packages" element={<PackageSelections />} />
          <Route path="/itenerary" element={<IteneraryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
