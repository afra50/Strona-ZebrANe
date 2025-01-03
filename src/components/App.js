import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.scss";
import Header from "./Header";
import Home_page from "./pages/Home_page";
import Support_page from "./pages/Support_page";
import Contact_page from "./pages/Contact_page";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/wspieram" element={<Support_page />} />
        <Route path="/kontakt" element={<Contact_page />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
