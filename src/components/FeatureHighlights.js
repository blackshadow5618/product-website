import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaHeadphonesAlt,
  FaBatteryFull,
  FaBluetooth,
  FaCloud,
} from "react-icons/fa";

const features = [
  {
    icon: <FaHeadphonesAlt size={40} className="text-accentBlue" />,
    title: "Adaptive Noise Cancellation",
  },
  {
    icon: <FaBatteryFull size={40} className="text-accentPink" />,
    title: "48-Hour Battery Life",
  },
  {
    icon: <FaBluetooth size={40} className="text-accentBlue" />,
    title: "Bluetooth 5.3 + Multi-Device Pairing",
  },
  {
    icon: <FaCloud size={40} className="text-accentPink" />,
    title: "Touch Controls with Haptic Feedback",
  },
];

const FeatureHighlights = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <section className="relative h-screen bg-darkbase2 text-neutralTextLight flex flex-col justify-center items-center px-6">
      <motion.div
        style={{ opacity }}
        className="max-w-3xl w-full p-8 bg-darkbase1 bg-opacity-70 rounded-xl backdrop-blur-md shadow-soft"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            className="flex items-center space-x-4 mb-6 last:mb-0"
          >
            <div>{feature.icon}</div>
            <h3 className="text-xl font-semibold tracking-wide">
              {feature.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureHighlights;
