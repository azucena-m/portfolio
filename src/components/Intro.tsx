import Background from "./Background";
import Tech from "./Tech";

function Intro() {
  return (
    <>
      <div className={"text-center pt-10"}>
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/avatar.JPG" alt={"avatar"} />
          </div>
        </div>
        <h1 className={"text-5xl md:text-8xl pb-10"}>Azucena Marroquin</h1>
        <p className={"text-3xl md:text-5xl pb-10 "}>Your Future Developer</p>
      </div>
    </>
  );
}

export default Intro;
