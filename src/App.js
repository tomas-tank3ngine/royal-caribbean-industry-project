import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PackageSelections from "./pages/PackageSelections/PackageSelections";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<PackageSelections />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
