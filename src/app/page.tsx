import React from "react";
import Main from "./main/page"
import About from "./about/page";
import Skills from "./skills/page";
import Project from "./project/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="bg-zinc-950 h-full ">
      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
