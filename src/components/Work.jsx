import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div variants={fadeIn("right", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div className="flex flex-col gap-y-0">
              <h2 className="h2 leading-tight text-[#8b49ff]/60">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-md mb-9">Here are a few latest web projects I've worked on. Continuously focused on how to improve my work and do it the best way i can</p>
              <a href="https://github.com/radenagus17" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-sm">View all projects</button>
              </a>
            </div>
            {/* img */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overflow */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300" />
              {/* img */}
              <img className="group-hover:scale-125 transition-all duration-500" src="https://ik.imagekit.io/jastipQue/portfolio/tr:w-auto,f-avif,q-80/widing_5FzxVgA7S.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674908567123" alt="" />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Next.Js Project</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white text-3xl">Widing.id</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="flex-1 flex flex-col gap-y-10">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overflow */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300" />
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src="https://ik.imagekit.io/jastipQue/portfolio/tr:w-auto,f-avif,q-80/adina_hotel_rzeulV_u_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674908565178"
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React.Js Project</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white text-3xl">Adina Hotel & Spa</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overflow */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300" />
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src="https://ik.imagekit.io/jastipQue/portfolio/tr:w-auto,f-avif,q-80/toko_baju_bFsxHNFIK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674908564479"
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React.Js Project</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white text-3xl">Fashionable Store</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
