import React from 'react';
import './index.css';
import Background from "./components/Background";




function App() {
  return (
      <>
        <div id="slide1" className="carousel-item relative w-full">
          <Background/>
          <div className="absolute flex justify-between transform -translate-y-1/4 left-3 right-3 top-1/4">
              <a href="#slide4" className="btn btn-md btn-circle btn-ghost text-white text-3xl">❮</a>
              <div className={"text-center"}>
                  <div className="avatar">
                      <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src="/avatar.JPG"  alt={"avatar"}/>
                      </div>
                  </div>
                <h1 className={"text-white text-5xl md:text-8xl pb-10"}>Azucena Marroquin</h1>
                <p className={"text-3xl md:text-5xl pb-10 "}>Your Future Developer</p>
              </div>
              <a href="#slide2" className="btn btn-md btn-circle btn-ghost text-white text-3xl">❯</a>
          </div>
      </div>
          </>
  );
}

export default App;
