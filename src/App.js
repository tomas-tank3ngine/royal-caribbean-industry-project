import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element="" />
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
