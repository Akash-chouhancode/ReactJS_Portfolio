import React, { useState } from "react";
import img1 from "../assets/img/portfolioimg.jpg";
import img2 from "../assets/img/todoimg.jpg";
import img3 from "../assets/img/movieimg.png";
import img4 from "../assets/img/Age-Calculator.jpeg";
import img5 from "../assets/img/weatherimg.png";
import img6 from "../assets/img/fullstackimg.jpg";
import img7 from "../assets/img/Bootstrap.png";


const Project = () => {

  const filterdata=[
    {
      filterid:1,
      lable:'All'
    },
    {
      filterid:2,
      lable:'JavaScript'
    },
    {
      filterid:3,
      lable:'MERN'
    },
    {
      filterid:4,
      lable:'Web-Designs'
    },
  ]






  const projects = [
    {
      id: 3 ,
      title: "MY PORTFOLIO USING REACT.JS",
      description:
        "My portfolio website showcases my skills and projects, built using cutting-edge technologies. This dynamic web application leverages React, a powerful JavaScript library for creating user interfaces. The UI is styled using Tailwind CSS, a utility-first framework that simplifies layout and design. To enhance the user experience.",
      
      codeLink:"https://github.com/Akash-chouhancode/React_Portfolio",
      image: img1,
    },
    {
      id: 2,
      title: "TO-DO LIST",
      description:
        "web application designed to streamline your daily tasks. Our application harnesses the power of your browser’s local storage to securely keep your to-do list at your fingertips, without the need for an internet connection.",
        codeLink:"https://github.com/Akash-chouhancode/To-do-list",
        image: img2,
    },
    {
      id: 3,
      title: "MOVIES SEARACH APP",
      description:
        "Web application that allow users to search for movie by title and view the results form the movie Database API. The app is built with React.Js, Bootstrap and React Hooks and custom components to create a user friendly interface.",
        codeLink:"https://github.com/Akash-chouhancode/React_movie_app",
        image: img3,

    },
    {
      id: 2,
      title: "AGE CALCULATOR",
      description:
        "Unveil the mystery of your age with Timeless Age Calculator, a sleek and simple web application crafted with the latest web technologies: JavaScript, HTML, and CSS. Our app provides a user-friendly platform to calculate your age down to the very second.",
        codeLink:"https://github.com/Akash-chouhancode/age-calculator",
        image: img4,
    },
    {
      id: 2,
      title: "Weather Application",
      description:
        "Weather Now is a user-friendly web application that provides up-to-date weather data for any location. It uses a weather API to fetch the weather data from a reliable source and display it on the web page.",
        codeLink:"https://github.com/Akash-chouhancode/weather-application",
        image: img5,
    },
    {
      id: 3,
      title: "MERN FULLSTACK WEBSITE",
      description:
        "web application designed to streamline your digital experience. Built with the powerful combination of React, MongoDB, Bootstrap, and Node.js, this application offers a seamless, end-to-end solution for managing data with complete CRUD (Create, Read, Update, Delete) functionality.Instantly reflect changes across the platform, providing a dynamic and interactive experience.",
        codeLink:"https://github.com/Akash-chouhancode/MERN-IT-WEBSITE",
        image: img6,
    },
    {
      id: 4,
      title: "BOOTSTRAP TEMPLATE",
      description:
        "Create an elegant and straightforward portfolio website with our minimalist template. Leveraging Bootstrap, HTML, and CSS, this template focuses on showcasing your work without distractions. The responsive design ensures that your portfolio looks great on various devices.",
        codeLink:"https://github.com/Akash-chouhancode/Bootstrappro1",
        image: img7,
    },
    {
      id: 4,
      title: " PORTFOLIO USING BOOTSTRAP",
      description:
        "Create an elegant and straightforward portfolio website with our minimalist template. Leveraging Bootstrap, HTML, and CSS, this template focuses on showcasing your work without distractions. The responsive design ensures that your portfolio looks great on various devices.",
        codeLink:"https://github.com/Akash-chouhancode/portfolio",
        image: img7,
    },
  ];

  const [filtervalue,setfiltervalue]=useState(1)

  const handelfilter =(currentid)=>{

    setfiltervalue(currentid)
  }

  

  const filterdItem=filtervalue===1 ? projects:
  projects.filter(item=>item.id===filtervalue)

 

  return (
    <>
      <div id="project" className=" w-full ">
        <div className="projectheading pt-10 text-zinc-900">
          {["Let See My Work", "My Projects"].map((item, index) => {
            return (
              <div
                key={index}
                className={`text-center  text-3xl font-bold font-akash ${index === 0 && "text-red-900"
                }`}
              >
                {" "}
                {item}
              </div>
            );
          })}
        </div>

        <div className="menubar flex justify-center items-center  flex-wrap mt-20 rounded-xl border-[2px]  border-zinc-500">
          {filterdata.map((item,index) => {
            return (
              <h1 onClick={()=>handelfilter(item.filterid)} key={item.filterid} className={` p-6  text-xl  font-bold leading-3 cursor-pointer  duration-500 ${item.filterid===filtervalue ? "text-red-700":"text-zinc-900"}`}>
                {item.lable}
              </h1>
            );
          })}
        </div>

        <div className=" flex  gap-20 flex-wrap justify-evenly mb-32">
          {filterdItem.map((item) => {
            return   <div key={item.title.trim()} class="w-[350px] h-[400px] bg-transparent cursor-pointer group perspective">
              <h1 className=" font-bold text-xl mt-9 text-zinc-900 mb-2">{item.title}</h1>
            <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div class="absolute backface-hidden border-2 w-full h-full rounded-3xl overflow-hidden">
                <img src={item.image} class="w-full h-full " />
              </div>
              <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                  <h1 class="text-3xl font-semibold">{item.title}</h1>
                 
                  <p>
                    {item.description}
                  </p>
                 

                 <button class="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-5 scale-0 group-hover:scale-125">
                   <a href={item.codeLink}>Visit Code On Github</a> 
                  </button>
                </div>
              </div>
            </div>
          </div>;
          })}
        </div>
      </div>

     
      
     
    </>
  );
};

export default Project;
