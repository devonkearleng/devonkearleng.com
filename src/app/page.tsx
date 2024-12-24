"use client";
import Image from "next/image";
import React, {useState, useEffect} from 'react';

export default function Home() {
  const [isdark, setIsdark] = useState(() => {
    const storedIsdark = localStorage.getItem("isdark");
    return storedIsdark ? JSON.parse(storedIsdark) : false;
  }
  );
  useEffect(() => {
    // Save the preference to localStorage
    localStorage.setItem("isdark", JSON.stringify(isdark));

    // Dynamically update CSS variables for dark/light mode
    const root = document.documentElement;
    if (isdark) {
      root.style.setProperty("--background", "#000000");
      root.style.setProperty("--foreground", "#ededed");
    } else {
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#171717");
    }
  }, [isdark]);

  return (
    <div className="">
      <div className="navbar bg-secondary font-primary text-xl">
        <div className="flex-1">
          <a className="font-primary btn btn-ghost text-xl">dkl</a>
        </div>
        {/* TODO: Figure out how to put a custom font for these words */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="font-primary text-xl">Experience</a>
            </li>
            <li>
              <a className="font-primary text-xl">Projects</a>
            </li>
            <li>
              <a className="font-primary text-xl">Fun</a>
            </li>
            <li>
              <a className="font-primary text-xl">About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero bg-box min-h-screen">
        <div className="hero-content bg-secondary flex-col lg:flex-row">
          {/** TODO: Figure out how to place your own image here. */}
          <Image
            src="/images/devon.png"
            alt="Devon Kear-Leng"
            width={500} // Specify a width
            height={500} // Specify a height
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-primary">Devon Kear-Leng</h1>
            <p className="py-6 font-primary">
              Hey y'all! I study Computer Engineering at Brown. I'm passionate
              about low level software, hardware, and using the two to provide
              physical solutions in our world. Contact me at{" "}
              <a>devon_kear-leng@brown.edu</a>
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary font-primary">Linkedin</button>
              <button className="btn btn-primary font-primary">Github</button>
              <button className="btn btn-primary font-primary">Resume</button>
            </div>
          </div>
        </div>
      </div>
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" className="theme-controller" value="synthwave" checked={isdark} onChange={() => setIsdark(!isdark)} />

        {/* sun icon */}
        <svg
          className="swap-off h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
          className="swap-on h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </div>
  );
}
