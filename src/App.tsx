import React from "react";
import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contacts from "./components/Contacts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import * as dotenv from "dotenv";
dotenv.config();

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ParallaxProvider>
        <NavBar></NavBar>

        <div>
          <section id="hero">{<Hero />}</section>
          <section id="about">{<About />}</section>
          <section id="work">{<Work />}</section>
          <section id="contacts">{<Contacts />}</section>
          <section id="footer">{<Footer />}</section>
        </div>
      </ParallaxProvider>
    </>
  );
};

export default App;
