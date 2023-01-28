import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="section py-32" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div variants={fadeIn("right", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="flex-1 flex items-center justify-start">
            <div>
              <h4 className="text-xl uppercase text-[#8b49ff]/60 font-medium mb-2 tracking-wide">Get in touch</h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                togather!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            action="https://getform.io/f/7c5ec5e9-230f-43be-9962-30c6b80948d9"
            method="POST"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input type="text" name="name" className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-[#8b49ff]/60 transition-all" placeholder="Your name" />
            <input type="text" name="email" className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-[#8b49ff]/60 transition-all" placeholder="Your email" />
            <textarea name="message" className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-[#8b49ff]/60 transition-all resize-none mb-12" placeholder="Your message" />
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
