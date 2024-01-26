import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Loading from "./components/Loading/Loading";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Loading" element={<Loading/>} />

        </Routes>
      </BrowserRouter>
      {/* <button>Click me</button> */}
    </>
  );
}

export default App;
