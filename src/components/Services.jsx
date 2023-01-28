import React from "react";
// icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

// services data
const services = [
  {
    name: "React JS",
    description:
      "React is a JavaScript library for building user interfaces. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    link: "https://reactjs.org",
  },
  {
    name: "Tailwind CSS",
    description:
      "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file. It's fast, flexible, and reliable — with zero-runtime.",
    link: "https://tailwindcss.com/docs/installation",
  },
  {
    name: "Express JS",
    description: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    link: "https://expressjs.com",
  },
  {
    name: "Next JS",
    description:
      "Next.js is a flexible React framework that gives you building blocks to create fast web applications. But what exactly do we mean by this? Let’s spend some time expanding on what React and Next.js are and how they can help.",
    link: "https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div variants={fadeIn("right", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="flex-1 mb-12 lg:mb-0 relative">
            <div className="lg:bg-services lg:bg-bottom absolute inset-0 opacity-30 bg-no-repeat" />
            <h2 className="h2 text-[#8b49ff]/60 mb-6">Skillset</h2>
            <h3 className="h3 max-w-[455px] mb-16">I'm a Front-end Developer with over 1 years of experience</h3>
            <Link to="work" smooth spy activeClass="active" className="relative">
              <button className="btn btn-sm">See my work</button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div variants={fadeIn("left", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="flex-1">
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div className="border-b border-white/20 h-[146px] mb-[38px] flex lg:gap-x-3 gap-x-0" key={index}>
                    <div className="lg:max-w-[465px] max-w-[305px] pr-3 lg:pr-0">
                      <h4 className="text-[20px] tracking-wider font-tertiary font-semibold mb-6">{name}</h4>
                      <p className="font-secondary leading-tight lg:text-[14px] text-xs">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-baseline">
                      <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a href={link} className="text-gradient text-sm" target="_blank" rel="noopener noreferrer">
                        Learn More
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
