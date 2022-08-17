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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const getColor = (screenWidth: number) => {
    if (screenWidth < 576) return "red";
    if (screenWidth < 768) return "blue";
    if (screenWidth < 992) return "green";
    if (screenWidth < 1200) return "yellow";
    if (screenWidth < 1400) return "pink";
    return "violet";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ParallaxProvider>
        <NavBar></NavBar>

        <div className="changingColor">
          <h1>this.state.innerWidth: {screenWidth}</h1>
          <h1 style={{ backgroundColor: getColor(screenWidth) }}>
            The background color of this div changes as you resize your screen
          </h1>
        </div>

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
