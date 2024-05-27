import React from "react";
import { Navbar } from "./components/Navbar";
import Contact from "./components/Contact";
import Project from "./components/Project";
import { Home } from "./components/Home";
import { About } from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className=" w-full  z-20">
      <Navbar />
   
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
