import "./App.css";
import Careers from "./components/Careers/Careers";
import MainPage from "./components/MainPage";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="careers" element={<Careers />} />
      </Routes>
    </div>
  );
};

export default App;
