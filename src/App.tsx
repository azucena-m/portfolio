import React from 'react';
import './index.css';


function App() {
  return (
      <div id="slide1" className="carousel-item relative min-h-screen">
          <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full"  alt={'background image'}/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <h1 className={"text-3xl"}>Azucena Marroquin</h1>
              <p>Your Future Developer</p>
              <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
      </div>
   
        
        

  );
}

export default App;
