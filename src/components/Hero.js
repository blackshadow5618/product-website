import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-darkbase2 text-neutralTextLight overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center px-4"
      >
        <h1 className="text-6xl font-bold tracking-wide mb-4 font-inter">
          Meet the Future of Sound
        </h1>
        <p className="text-xl max-w-xl mx-auto font-medium">
          Reimagining wireless audio with precision, comfort, and power.
        </p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10"
      >
        <svg
          className="w-8 h-8 mx-auto text-accentBlue"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
