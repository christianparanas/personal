import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Icon from "../components/Icon";

export default function Home() {
  return (
    <div className="">
      <Navbar />



      <div className="pt-20 h-96 pb-96">
        <div className="hero py-10 px-4">
          <div className="info">
            <p className="text-slate-400">
              Hello, <span className="text-slate-50">I am</span>
            </p>
            <h1 className="font-bold text-3xl py-2">Christian R. Paranas</h1>
            <p className="text-slate-400">
              a software developer currently in Tacloban City, Philippines.
              Specializing in building websites and applications. My current
              toolset includes Vue, React, Redux, Node, Laravel, and other
              various frameworks, libraries, and technologies related to them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
