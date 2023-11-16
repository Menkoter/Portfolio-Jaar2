import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import Experience from "./components/Pages/Skills";
import Contact from "./components/Pages/Contact";
import Navigation from "./components/Pages/Navigation";
import "./App.css";

const App = () => {
  return (
    <div className="app" style={{ backgroundColor: "#2A2A2A" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
