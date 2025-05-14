import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProductReveal = () => {
  const { scrollYProgress } = useScroll();

  // Scale and rotate based on scroll progress
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.2]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-darkbase1 text-neutralTextLight px-6">
      <motion.div
        style={{ scale, rotateY }}
        className="w-64 h-64 bg-gradient-to-tr from-accentBlue to-accentPink rounded-xl shadow-soft flex justify-center items-center text-neutralTextLight font-semibold"
      >
        {/* Placeholder for 360° product image or 3D render */}
        <div className="w-full h-full flex justify-center items-center rounded-xl">
          Product Image
        </div>
      </motion.div>
      <div className="mt-8 max-w-xl text-center space-y-4">
        <p className="text-lg font-semibold tracking-wide">
          Crafted from aerospace-grade aluminum
        </p>
        <p className="text-lg font-semibold tracking-wide">
          Ergonomic. Balanced. Iconic.
        </p>
      </div>
    </section>
  );
};

export default ProductReveal;
