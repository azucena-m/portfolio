import Tech from "./Tech";

function Intro() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/abstract.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="avatar">
              <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mb-5">
                <img src="/avatar.JPG" alt={"avatar"} />
              </div>
            </div>
            <h1 className="mb-5 text-6xl font-bold">Azucena Marroquin</h1>
            <p className="mb-5 text-3xl">Software Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
