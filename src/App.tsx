import React from 'react';
import './index.css';
import Background from "./components/Background";



function App() {
  return (
      <div id="slide1" className="carousel-item w-full">
          <Background/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-md btn-circle btn-ghost text-white text-3xl">❮</a>
              <div className={"text-center"}>
                <h1 className={"text-white text-5xl md:text-9xl pb-10"}>Azucena Marroquin</h1>
                <p className={"text-3xl md:text-5xl"}>Your Future Developer</p>
              </div>
              <a href="#slide2" className="btn btn-md btn-circle btn-ghost text-white text-3xl">❯</a>
          </div>
      </div>
  );
}

export default App;
