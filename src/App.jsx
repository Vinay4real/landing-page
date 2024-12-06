// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPages from "./components/LandingPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />} />
      </Routes>
    </Router>
  );
}

export default App;
