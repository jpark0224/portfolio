import React from "react";
// import ScriptTag from "react-script-tag";

import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contacts from "./components/Contacts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
      <div>
        <section id="hero">{<Hero />}</section>
        <section id="about">{<About />}</section>
        <section id="work">{<Work />}</section>
        <section id="contacts">{<Contacts />}</section>
        <section id="footer">{<Footer />}</section>
      </div>
    </>
  );
};

export default App;
