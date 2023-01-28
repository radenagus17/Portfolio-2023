import React from "react";
// countup
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div variants={fadeIn("right", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="flex-1 bg-logo bg-contain bg-no-repeat h-[640px] bg-center mix-blend-overlay" />
          {/* text */}
          <motion.div variants={fadeIn("left", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="flex-1">
            <h2 className="h2 text-[#8b49ff]/60">About me</h2>
            <h3 className="h3 mb-4">I'm a Front-End Developer with over 1 years of experience</h3>
            <p className="mb-6 text-sm">
              Having basic IT in my studies allows me to explore all things related to the world of Technology, until now I am still motivated programmer to continue learning software to achieve a lifelong career as a developer. Proficient
              in both front-end and back-end development, also eager to improve skills in order to provide efficient solutions in Software Development.
              <br />
              <br />
              Able to work with a solid team and efficient communication to get the best way to solve problems
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">{inView ? <CountUp start={0} end={3} duration={3} /> : null}+</div>
                <div className="font-tertiary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">{inView ? <CountUp start={0} end={17} duration={3} /> : null}+</div>
                <div className="font-tertiary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              {/* <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">{inView ? <CountUp start={0} end={5} duration={3} /> : null}+</div>
                <div className="font-tertiary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div> */}
            </div>
            <div className="flex gap-x-8 items-center">
              <Link to="contact" smooth spy activeClass="active">
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a href="https://github.com/radenagus17" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
