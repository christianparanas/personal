import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";

import "../styles/globals.css";
import Icon from "../components/Icon";

const itemVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

function MyApp({ Component, pageProps }: AppProps) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.div
          animate={loader ? "open" : "closed"}
          variants={itemVariants}
          exit={{ x: 100 }}
          className={`${
            loader ? "" : "hidden"
          } absolute z-10 w-full h-full bg-slate-900 flex items-center justify-center`}
        >
          <Icon props={{ w: "60", h: "60" }} />
        </motion.div>
      </AnimatePresence>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
