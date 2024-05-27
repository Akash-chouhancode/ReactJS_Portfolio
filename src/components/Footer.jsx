import React from "react";
import Button from "./Button";

import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" relative  bg-slate-300   text-zinc-800 p-4 mt-44 md:mt-10 ">
      <div className="container flex  justify-center flex-wrap">
        <div className="socialIcon mt-6">
          <h5 className="text-3xl font-bold">
            Have a Question ?
          </h5>
          <div className=" mt-5">
            <div className=" flex items-center gap-2 ">
              <FaPhoneAlt /> <span>6376 906 203</span>
            </div>
            <div className=" flex items-center gap-2 ">
              <IoMail /> <span>akashchouhan3395@gmail.com</span>
            </div>
          </div>

          <div className=" flex gap-9  mt-5 text-2xl ">
           

            <a href="https://www.instagram.com/akash__chouhan/">
              {" "}
              <FaInstagram />{" "}
            </a>
            <a href="https://github.com/Akash-chouhancode">
              <FaGithub />
            </a>
            <a href="https:/www.linkedin.com/in/akash-lakshkar-998723228/">
              {" "}
              <FaLinkedin />
            </a>
          </div>

          

         
        </div>
      </div>
     
    </footer>
    
  );
};

export default Footer;
