import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import MySkills from "./components/MySkills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skills/>
      <MySkills/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
