import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.scss";
import Header from "./Header";
import Home_page from "./pages/Home_page";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home_page />} />
      </Routes>
    </Router>
  );
}

export default App;
