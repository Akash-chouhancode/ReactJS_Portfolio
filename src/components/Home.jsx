import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { gsap } from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cursorplay from "./Cursorplay";

export const Home = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "Backend Developer", "React Js Developer"],

    loop: {}, // true or an
    typeSpeed: 150,
    delaySpeed: 1000,
    deleteSpeed: 50,
    pauseSpeed: 2000,
  });

  const start = (detail) => {
    gsap.to("#cu", {
      x: detail.clientX,
      y: detail.clientY,
    });
    // console.log(detail)
  };
  const startanimation = () => {
    gsap.to("#cu", {
      scale: 1,
      opacity: 1,
    });
  };

  const endanimation = () => {
    gsap.to("#cu", {
      scale: 0,
      opacity: 0,
    });
  };

  return (
    <>
      <Cursorplay />
      <div
        id="homePage"
        className=" relative w-full h-2/3 z-20"
        onMouseMove={(detail) => {
          start(detail);
        }}
        onMouseEnter={() => {
          startanimation();
        }}
        onMouseLeave={() => {
          endanimation();
        }}
      >
        <div id="home" className="homesection px-5 mt-56 md:mt-56 md:px-20 min-h-[500px] ">
       
          <div className="">
           
            <h1 className=" w-fit rounded-sm p-1 tracking-wider font-akash font-semibold bg-gradient-to-l from-pink-300 to-violet-400  text-xl  ">
              Welcome to my portfolio
            </h1>
            <div className=" mt-4 md:mt-2">
              <h1 className="  text-[7.5w] leading-[7vw]  tracking-tight text-3xl md:text-7xl  text-zinc-900">
                Hi! I'm Akash Chouhan
              </h1>
              <h1 className="text-[7.5w] leading-[7vw]  tracking-tight text-2xl  md:text-7xl text-zinc-900">
                {text}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
