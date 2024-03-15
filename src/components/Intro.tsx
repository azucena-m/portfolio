import Tech from "./Tech";

function Intro() {
  return (
    <>
    
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex justify-end">
            <ul >
              <li ><a>linkedin</a></li>
              <li ><a>github</a></li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-3xl italic text-pink-400">-Hello,</h3>
            <h1 className="mb-5 text-7xl font-bold">I'm Azucena Marroquin,</h1>
            <p className="mb-5 text-3xl">Software Developer</p>
          </div>
        </div>
        
      </div>
      
     
    </>
  );
}

export default Intro;
