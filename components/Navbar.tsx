import React, { useState, useEffect } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

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
  closed: { x: 100 },
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

  const closeNav = () => {
    setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  useEffect(() => {
    console.log('rerender')
  }, [])

  useEffect(() => {
    if (isOpen == true) {
      setOverlayClass("block");
      return;
    }

    setTimeout(() => {
      setOverlayClass("hidden");
    }, 400);
  }, [isOpen]);

  return (
    <div className="">
      <div className="fixed w-full flex justify-between items-center py-2 px-4 backdrop-blur border-b-2 border-slate-400/10">
        <div className="brand">Chan</div>
        <div className="navigation">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      <div
        className={`${overlayClass} absolute w-full h-full backdrop-blur-md py-2 px-4 text-right overflow-hidden`}
      >
        <div className="flex justify-between">
          <div className=""></div>
          <Hamburger toggled={isOpen} toggle={closeNav} />
        </div>

        <motion.ul
          className="mt-8 grid gap-2"
          animate={isOpen ? "open" : "closed"}
          variants={container}
        >
          <AnimatePresence>
            {navItems.map((item: any, key) => {
              return (
                <motion.li
                  key={key}
                  variants={itemVariants}
                  className="p-2"
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
