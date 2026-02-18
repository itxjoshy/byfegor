import { useState } from "react";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Marquee from "./components/Marquee";
import Showcase from "./components/Showcase";
import About from "./components/About";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Collection />
      <Marquee />
      <Showcase />
      <About />
      <Footer />
    </>
  );
}

export default App;
