import React from "react";
// images
import Image from "../assets/avatar2.jpg";
// icons
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left -mt-14 lg:mt-0">
            <motion.h1 variants={fadeIn("up", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="text-[55px] font-bold leading-[0.8] lg:text-[86px] text-accent">
              RADEN <span className="text-white">AGUS</span>
            </motion.h1>
            <motion.div variants={fadeIn("up", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="mb-6 text-[36px] lg:text-[58px] font-semibold font-secondary uppercase leading-[1]">
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation sequence={["Developer", 2000, "Designer", 2000, "Freelancer", 2000]} speed={50} className="text-accent" wrapper="span" repeat={Infinity} />
            </motion.div>
            <motion.p variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed text-sm lg:text-base">
              Digital Enthusiasm who has just embarked on an extraordinary and meaningful journey in the world of Programming & Software Engineer; Optimistic, flexible and open-minded person; Loves to travel and share stories.
            </motion.p>
            <motion.div variants={fadeIn("up", 0.6)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <Link to="contact" smooth spy activeClass="active">
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a href="https://github.com/radenagus17" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div variants={fadeIn("up", 0.7)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://linkedin.com/in/radenagus17" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/radenagus17" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/radenagus17_" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div variants={fadeIn("down", 0.5)} initial="hidden" whileInView={"show"} className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={Image} alt="" className="rounded-full border-2 border-white shadow-2xl shadow-[rgba(139, 73, 255, 0.51)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
