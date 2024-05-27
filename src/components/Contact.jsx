import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Button from "./Button";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xs8gk9k", "template_hd0eumx", form.current, {
        publicKey: "bxQ7CeBk_DVISntOm",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message Sent Successfully");
        },
        (error) => {
          toast.error("FAILED...");
          console.log("FAILED...", error);
        }
      );
      form.current.reset();
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div id="contact" className=" relative antialiased font-akash h-screen  bg-banner-bg2 bg-no-repeat bg-center bg-cover  ">
        <div className=" flex w-full min-h-screen justify-center items-center">
          <div className=" flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-7 bg-gradient-to-l from-zinc-300 to-purple-200 w-full max-w-7xl p-8 sm:p-12 rounded-xl shadow-md   ">
            <div className=" flex flex-col justify-between space-y-8">
              <div>
                <h1 className=" font-bold text-3xl tracking-wide text-center">
                  Get in touch!
                </h1>
                <p className=" pt-2 text-sm">
                  As a MERN Stack Developer, I specialize in crafting full-stack
                  web applications that are both robust and user-friendly.I aim
                  to create seamless web experiences that drive business
                  success. Let’s connect and explore how my expertise can
                  contribute to your team's vision.
                </p>
              </div>

              {/*  Phone Number */}
              <div className="flex flex-col space-y-6">
                <div className=" inline-flex items-center space-x-3">
                  {" "}
                  <FaPhoneAlt /> <span>6376 906 203</span>
                </div>
                <div className=" inline-flex items-center space-x-3">
                  <IoMail /> <span>akashchouhan3395@gmail.com</span>
                </div>
                <div className=" inline-flex items-center space-x-3">
                  {" "}
                  <FaLocationDot /> <span>4/23 vijay nager,Indore</span>
                </div>
              </div>

              {/* sociap icon */}

              <div className=" flex space-x-4 text-xl">
                <a href="https://www.instagram.com/akash__chouhan/">
                  {" "}
                  <FaFacebook />{" "}
                </a>
                <a href="https://github.com/Akash-chouhancode">
                  <FaGithub />
                </a>
                <a href="https:/www.linkedin.com/in/akash-lakshkar-998723228/">
                  {" "}
                  <FaLinkedin />
                </a>
                <a href="">
                  <FaXTwitter />
                </a>
              </div>
            </div>
            {/* form */}
            <div>
              <div className=" bg-white rounded-lg p-8 shadow-md md:w-80">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="flex flex-col  space-y-4 items-center justify-center"
                >
                  <div>
                    <label htmlFor="name" className=" font-bold">
                      Your Name:-
                    </label>

                    <input
                      id="name"
                      name="to_name"
                      required
                      type="text"
                      placeholder="Your name"
                      className=" ring-1 ring-gray-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-black py-1 mt-2"
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="email" className=" font-bold">
                      E-mail Address:-
                    </label>

                    <input
                      id="email"
                      name="from_email"
                      type="email"
                      placeholder="E-mail"
                      required
                      className=" ring-1 ring-gray-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-black py-1 mt-2"
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="message" className=" font-bold">
                      Message:-
                    </label>

                    <textarea
                      rows={5}
                      id="message"
                      name="message"
                      required
                      type="textarea"
                      placeholder="message"
                      className=" ring-1 ring-gray-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-black py-1 mt-2"
                    ></textarea>
                  </div>

                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
