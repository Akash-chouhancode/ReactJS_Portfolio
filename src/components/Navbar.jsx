import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiIonic } from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
import Hamburger from "hamburger-react";
import Button from "./Button";
export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  let Links = [
    {
      name: "HOME",
      link: "#home",
      
    },
    {
      name: "ABOUT",
      link: "#about",
     
    },
    {
      name: "SKILLS",
      link: "#skills",
     
    },
    {
      name: "PROJECT",
      link: "#project",
     
     
    },
    {
      name: "CONTACT",
      link: "#contact",
     
    },
  ];
  return (
    <>
      <nav>
        <div className="w-full fixed top-0 left-0 bg-slate-200 z-40">
          <div className="md:flex  items-center justify-between py-4 md:px-10 px-7 ">
            <div className=" font-bold text-2xl cursor-pointer flex items-center font-akash text-gray-800">
              <span className=" text-3xl text-pink-950 mr-1 pt-1">
                <SiIonic />
              </span>
              PORTFOLIO
            </div>

            <div className="  absolute right-8 top-2  cursor-pointer md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

            <ul
              className={`md:flex md:items-center md:pb-0  pb-6 absolute md:static bg-slate-200 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  transition-all duration-500 ease-in ${
                isOpen == true ? "top-15 opacity-100" : "top-[-490px]"
              }  md:opacity-100 opacity-0`}
            >
              {
               

                Links.map((link) => (
                  <li
                    key={link.name}
                    className="md:ml-5 text-xl font-akash leading-none font-bold md:my-0 my-6 "
                  >
                    <a 
                    
                      href={link.link}
                      className=" cursor-pointer hover:text-red-500 duration-500 "
                    >
                      {link.name}
                    </a>
                  </li>
                ))
              }
              
             <a href="https://github.com/Akash-chouhancode"><Button>Github Profile</Button></a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
