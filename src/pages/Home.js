import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Switch from "react-switch";
import About from "./About";
import Projects2 from "./Projects2";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Bottom from "./Bottom";
import Skills from "./Skills";
const Home = ({ toggleAnimation, isAnimationPaused }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100); // Adjust scroll position as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-28">
      <div className="grid grid-cols-1 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center"
        >
          <h1 className="text-white mb-4 text-3xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700">
              Hello, I'm
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Balaji Mittapalli",
                1000,
                "Student",
                1000,
                "ML Enthusiast",
                1000,
                "Competitive Coder",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Machine learning is the new electricity.
          </p>
          {/* <div className="flex items-center justify-center mb-6">
            <label className="mr-2 text-[#ADB7BE]">Dark Matter Mode</label>
            <Switch
              onChange={toggleAnimation}
              checked={!isAnimationPaused}
              onColor="#c084fc"
              onHandleColor="#ec4899"
              handleDiameter={22}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={16}
              width={40}
              className="react-switch"
              id="animation-switch"
            />
            <label className="ml-2 text-[#ADB7BE]">Cosmic Night Mode</label>
          </div> */}
          <div className="flex justify-center mb-6">
            <button className="px-4 py-2 rounded-full bg-gradient-to-br from-purple-700 via-purple-500 to-pink-500 hover:bg-slate-800 text-white hover:text-purple-500 mt-3">
              <a
                href="https://www.linkedin.com/in/laxmipathi-balaji-mittapalli/"
                target="_blank"
                rel="noreferrer"
                className="block bg-[#000000] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Let's Connect!
              </a>
            </button>
          </div>
        </motion.div>
      </div>
      <div
        className={`transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-16 opacity-0'} mt-24`}
      >
        <About />
      </div>
      {/* <ProjectsSection/> */}
      <Skills/>
      <Projects2/>
      <Bottom/>
      
    </section>
  );
};

export default Home;
