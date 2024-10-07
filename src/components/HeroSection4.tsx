// import React from "react";
// import bgImg from "../assets/heroSectionBackground-2.png";
import openingVid from "../assets/headerOpening-2.gif";
import { motion } from "framer-motion";
import { PiPlayFill } from "react-icons/pi";
import { BiCart } from "react-icons/bi";

export default function HeroSection4() {
  return (
    <div className="relative w-full pt-48 pb-12 bg-gray-900 xl:pt-50 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      <div className="absolute inset-0">
        <img className="object-cover w-full h-full" src={openingVid} alt="" />
        {/* <video
          className="object-cover w-full h-full bg-gray-900"
          autoPlay={true}
          loop
          muted
        >
          <source src={openingVid} />
        </video> */}
      </div>

      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <motion.div
              // className="card"
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                y: 2 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              className="mb mb-10"
            >
              <h1 style={{ fontFamily: "Lalezar" }} className="text-white">
                <span className="font-normal text-7xl">AlfaRalpha </span>
                {/* <br /> */}
                <span className="font-normal text-8xl">Solar</span>
              </h1>
              <p
                style={{ fontFamily: "Lalezar" }}
                className="mt-5 font-sans text-3xl font-normal text-white text-opacity-70"
              >
                Premier Solar Power Solutions – Expert Sales & Installation
              </p>
            </motion.div>
            <div className="flex items-center justify-center mt-8 space-x-3 sm:space-x-4">
              <a
                href="#"
                title=""
                className="
                            inline-flex
                            gap-3
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            leading-6
                            transition-all
                            duration-200
                            border-2 border-transparent
                            rounded-full
                            sm:leading-8
                            bg-blue-600
                            sm:text-lg
                            text-gray-100
                            hover:bg-opacity-90
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                        "
                role="button"
              >
                <BiCart color="white" size={20} />
                Shop Now
              </a>

              {/* <a
                href="#"
                title=""
                className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            leading-6
                            transition-all
                            duration-200
                            bg-transparent
                            border-2
                            rounded-full
                            sm:leading-8
                            text-white
                            border-primary
                            hover:bg-white
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                            hover:text-black
                            sm:text-lg
                            focus:ring-offset-secondary
                        "
                role="button"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
                  />
                </svg>
                Watch trailer
              </a> */}
              <div className="relative flex items-center justify-center">
                {/* Ripple effect using Tailwind's animate-ping */}
                <div className="absolute w-32 h-32 rounded-full bg-blue-400 opacity-75 animate-ping"></div>

                {/* Play button */}
                <button className="relative z-10 flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full shadow-lg">
                  <PiPlayFill color="white" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute animate-bounce hidden transform -translate-x-1/2 lg:bottom-8 xl:bottom-12 left-1/2 lg:block">
        <a
          href="#featured"
          title=""
          className="inline-flex bg-blue-400 items-center justify-center w-12 h-12 transition-all duration-200 rounded-full text-white hover:bg-blue-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
          // role="button"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
