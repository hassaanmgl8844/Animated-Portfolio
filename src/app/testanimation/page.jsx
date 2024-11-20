"use client";

import React from "react";
import { motion } from "framer-motion";

const Testpage = () => {
  return (
    <div className="flex items-center justify-center ">
      <motion.div
        className="w-96 h-96 bg-red-400 rounded"
        initial={{ x: -100 }}
        animate={{ x: 100 , y: 300 , opacity: 0.5 }}
        transition={{delay:2,duration:4}}
      ></motion.div>
    </div>
  );
};

export default Testpage;
