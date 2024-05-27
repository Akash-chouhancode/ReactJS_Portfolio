import React from "react";

import { FaCode } from "react-icons/fa6";
import { FaDisplay } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { SiTarget } from "react-icons/si";
const Skills = () => {
  return (
    <>
      <div id="skills" className=" w-full">
       
          <h1 className=" text-center  font-bold text-4xl text-zinc-900 md:mb-24 mb-12">
            Skills<span className=" text-red-900">...</span>
          </h1>

          <div className=" skills flex  flex-wrap flex-col  md:flex-row md:justify-evenly pl-3">
            <div>
              <h1 className=" flex gap-2 leading-4 font-bold font-akash text-2xl text-zinc-900 md:mb-16 mb-12  ">
                <FaDisplay className=" text-2xl text-red-900" /> Frontend
              </h1>

              <div>
                {[
                  "HTML",
                  "CSS",
                  "Javascript",
                  " React.js",
                  "BootStrap5",
                  "Tailwind CSS",
                  "Git,GitHub",
                ].map((item, index) => {
                  return (
                    <ul
                      key={index}
                      className=" text-center font-bold text-xl text-zinc-900 md:mb
                        -16 mb-10 cursor-pointer"
                    >
                      <li>{item}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div>
              {" "}
              <h1 className=" flex gap-2 leading-4 font-bold font-akash text-2xl text-zinc-900 md:mb-24 mb-12">
                <FaCode className=" text-2xl text-red-900" /> Backend
              </h1>
              <div>
                {[" Node.js", "Experss.Js", "C(Basic)", "PHP"].map(
                  (item, index) => {
                    return (
                      <ul
                        key={index}
                        className=" text-center font-bold text-xl text-zinc-900 md:mb 
                          -16 mb-10 cursor-pointer"
                      >
                        <li>{item}</li>
                      </ul>
                    );
                  }
                )}
              </div>
            </div>
            <div>
              {" "}
              <h1 className=" flex gap-2 leading-4 font-bold font-akash text-2xl text-zinc-900 md:mb-24 mb-12">
                <FaDatabase className=" text-2xl text-red-900" /> Database
              </h1>
              <div>
                {["MongoDB", " MySQL"].map((item, index) => {
                  return (
                    <ul
                      key={index}
                      className=" text-center font-bold text-xl text-zinc-900 md:mb 
                          -16 mb-10 cursor-pointer"
                    >
                      <li>{item}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div>
              {" "}
              <h1 className=" flex gap-2 leading-4 font-bold font-akash text-2xl text-zinc-900 md:mb-24 mb-12">
                <SiTarget className=" text-2xl  text-red-900" /> Soft Skills
              </h1>
              <div>
                {[
                  "Effective Communication",
                  "Problem-solving abilities",
                  "Team Work",
                  " Adaptive ",
                ].map((item, index) => {
                  return (
                    <ul
                      key={index}
                      className=" text-center font-bold text-xl text-zinc-900 md:mb 
                          -16 mb-10 cursor-pointer"
                    >
                      <li>{item}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
};
export default Skills;
