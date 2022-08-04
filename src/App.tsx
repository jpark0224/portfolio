import React from "react";

import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contacts from "./components/Contacts";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero />
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default App;
