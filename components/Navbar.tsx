import React, { useState, useEffect } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

import Icon from "./Icon";

const container = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  closed: { x: 200 },
  open: { x: -5 },
};

const navItems = [
  { title: "Home" },
  { title: "Projects" },
  { title: "Tutorials" },
  { title: "Contact" },
];

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [overlayClass, setOverlayClass] = useState("hidden");

  useEffect(() => {
    if (isOpen == true) {
      setOverlayClass("block");
      return;
    }

    setTimeout(() => {
      setOverlayClass("hidden");
    }, 400);
  }, [isOpen]);

  const closeNav = () => {
    setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <div className="">
      <div className="fixed w-full flex justify-between items-center py-2 px-4 backdrop-blur border-b-2 border-slate-400/10">
        <div className="brand">
          <Icon props={{ w: "35", h: "35" }} />
        </div>
        <div className="navigation">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      <div
        className={`${overlayClass} fixed w-full h-full backdrop-blur-3xl py-2 px-4 text-right overflow-x-hidden`}
      >
        <div className="flex justify-between items-center">
        <Icon props={{ w: "35", h: "35" }} />
          <Hamburger toggled={isOpen} toggle={closeNav} />
        </div>

        <motion.ul
          className="mt-12 grid gap-2"
          animate={isOpen ? "open" : "closed"}
          variants={container}
        >
          <AnimatePresence>
            {navItems.map((item: any, key) => {
              return (
                <motion.li
                  key={key}
                  variants={itemVariants}
                  className="p-2 text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  exit={{ x: 100 }}
                >
                  {item.title}
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>
      </div>
    </div>
  );
}

export default Navbar;
