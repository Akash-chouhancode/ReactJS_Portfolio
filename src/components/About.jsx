import React from "react";
import { gsap } from "gsap";
import Button from "./Button";
import { motion } from "framer-motion";
import img from "../assets/img/header-img.svg";

export const About = () => {
  gsap.fromTo(
    "#img", // Target element (replace with your actual element selector)
    { y: -20 }, // Start position (translateY(-20px))
    { y: 20, repeat: -1, yoyo: true, duration: 1, ease: "power1.inOut" }
  );

  return (
    <>
      <div id="about" className=" w-full  mb-5">
        <div className="py-5">
          <h1 className=" text-center  font-bold text-4xl text-zinc-900 md:mb-24 mb-12">
            About-<span className=" text-red-900">Me</span>
          </h1>

          <div className=" flex flex-col  md:flex-row  md:gap-10  ">
            <div className=" md:w-[50vw] md:pl-11 md:m-auto ">
              <img
                id="img"
                className=" bg-cover bg-no-repeat overflow-hidden   "
                src={img}
                
                alt="img"
              />
            </div>

            <div className="w-full">
              <h1 className="md:text-6xl text-6xl  font-akash text-center text-[#270d32b4] md:mb-20 mb-14">
                So, who am I?
              </h1>

              <div className=" px-5">
                <h1 className=" text-3xl text-zinc-800  tracking-tighter  font-akash mb-9">
                My name is Akash, and I am a recent graduate with a Master of Computer Applications degree as of 2024. I possess a fervent enthusiasm for the field of web development.
                </h1>
                <p className="  text-black tracking-wide  leading-8">
                  My journey in this field has been marked by a rigorous 6-month
                  training in the MERN stack at Robotronix Engineering Tech. Pvt
                  Ltd, where I honed my skills in a variety of technologies. I
                  have a strong command over languages and frameworks such as{" "}
                  <span className=" font-semibold text-red-800">
                    C, JavaScript, React.js, Node.js, Express.js
                  </span>{" "}
                  , as well as front-end design with{" "}
                  <span className=" font-semibold text-red-800">
                    HTML5, Tailwind CSS, and Bootstrap 5
                  </span>{" "}
                  . On the database front, I am skilled in{" "}
                  <span className=" font-semibold text-red-800">
                    MongoDB and MySQL
                  </span>{" "}
                  , and I’m also proficient in version control with{" "}
                  <span className=" font-semibold text-red-800">Git</span> .
                  Outside of coding, I also find relaxation in photography,
                  capturing moments that inspire my creativity, and cooking,
                  which allows me to experiment with flavors just as I
                  experiment with code. I’m on the lookout for exciting
                  opportunities in web development and am eager to connect with
                  like-minded professionals and create something truly
                  remarkable together.
                </p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="start  items-center   w-fit md:mt-10 "
                >
                  <a href="../assets/doc/CV_akash.pdf"download>
                    <Button> Download Resume </Button>
                  </a>
                </motion.div>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
