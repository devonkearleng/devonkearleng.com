"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from 'react';

export default function Home() {
  const [isdark, setIsdark] = useState(false);

  useEffect(() => {
    // Fetch preference from localStorage on the client side
    const storedIsdark = localStorage.getItem("isdark");
    if (storedIsdark) {
      setIsdark(JSON.parse(storedIsdark));
    }
  }, []);
  useEffect(() => {
    // Save the preference to localStorage
    localStorage.setItem("isdark", JSON.stringify(isdark));

    // Dynamically update CSS variables for dark/light mode
    const root = document.documentElement;
    if (isdark) {
      root.style.setProperty("--background", "#000000");
      root.style.setProperty("--foreground", "#ededed");
      root.style.setProperty("--secondary", "#18181b");
    } else {
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#171717");
      root.style.setProperty("--secondary", "#f3f4f6");
    }
  }, [isdark]);

  return (
    <div className="">
      <div className="navbar bg-secondary font-primary text-xl">
        <div className="flex-1">
          <a href="/" className="font-primary btn btn-ghost text-xl">
            dkl
          </a>
        </div>
        {/* TODO: Figure out how to put a custom font for these words */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/experience.tsx" className="font-primary text-xl">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/projects.tsx" className="font-primary text-xl">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/fun.tsx" className="font-primary text-xl">
                Fun
              </Link>
            </li>
            <li>
              <Link href="/about.tsx" className="font-primary text-xl">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* TODO: Fix this issue. When this style is inserted it makes it such that I can no longer click 
        the pages on the Navbar. */}
      <div
        style={{ position: "relative", top: "-150px" }}
        className="hero bg-box min-h-screen"
      >
        <div className="hero-content bg-secondary flex-col lg:flex-row">
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
              <a href="mailto:devon_kear-leng@brown.edu">
                devon_kear-leng@brown.edu
              </a>
              !
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary font-primary">
                <a
                  href="https://www.linkedin.com/in/devonkearleng/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </button>
              <button className="btn btn-primary font-primary">
                <a href="https://github.com/devonkearleng" target="_blank">
                  Github
                </a>
              </button>
              <button className="btn btn-primary font-primary">
                <a href="/files/Devon_Kear-Leng_Resume.pdf" target="_blank">
                  Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* TODO: Insert "Experience" Title Here */}
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end font-primary">
            <time className="font-primary italic">June 2025 - August 2025</time>
            <div className="text-lg font-primary">Apex</div>
            Incoming SWE Intern working on Flight Software
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">1998</time>
            <div className="text-lg font-black">iMac</div>
            iMac is a family of all-in-one Mac desktop computers designed and
            built by Apple Inc. It has been the primary part of Apple's consumer
            desktop offerings since its debut in August 1998, and has evolved
            through seven distinct forms
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2001</time>
            <div className="text-lg font-black">iPod</div>
            The iPod is a discontinued series of portable media players and
            multi-purpose mobile devices designed and marketed by Apple Inc. The
            first version was released on October 23, 2001, about 8+1⁄2 months
            after the Macintosh version of iTunes was released. Apple sold an
            estimated 450 million iPod products as of 2022. Apple discontinued
            the iPod product line on May 10, 2022. At over 20 years, the iPod
            brand is the oldest to be discontinued by Apple
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2007</time>
            <div className="text-lg font-black">iPhone</div>
            iPhone is a line of smartphones produced by Apple Inc. that use
            Apple's own iOS mobile operating system. The first-generation iPhone
            was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since
            then, Apple has annually released new iPhone models and iOS updates.
            As of November 1, 2018, more than 2.2 billion iPhones had been sold.
            As of 2022, the iPhone accounts for 15.6% of global smartphone
            market share
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2015</time>
            <div className="text-lg font-black">Apple Watch</div>
            The Apple Watch is a line of smartwatches produced by Apple Inc. It
            incorporates fitness tracking, health-oriented capabilities, and
            wireless telecommunication, and integrates with iOS and other Apple
            products and services
          </div>
        </li>
      </ul>
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input
          type="checkbox"
          className="theme-controller"
          value="synthwave"
          checked={isdark}
          onChange={() => setIsdark(!isdark)}
        />

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
