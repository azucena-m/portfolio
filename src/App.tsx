import React from "react";
import "./index.css";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Intro />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
