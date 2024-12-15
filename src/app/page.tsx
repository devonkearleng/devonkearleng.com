import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="navbar bg-primary font-sans text-xl">
        <div className="flex-1">
          <a className="font-sans btn btn-ghost text-xl">dkl</a>
        </div>
        {/* TODO: Figure out how to put a custom font for these words */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a className="font-sans text-xl">Experience</a></li>
            <li><a className="font-sans text-xl">Projects</a></li>
            <li><a className="font-sans text-xl">Fun</a></li>
            <li><a className="font-sans text-xl">About</a></li>
          </ul>
        </div>
      </div>
      <div className="hero bg-box min-h-screen">
        <div className="hero-content bg-secondary flex-col lg:flex-row">
          {/** TODO: Figure out how to place your own image here. */}
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Devon Kear-Leng</h1>
            <p className="py-6">
              Hey y'all! I study Computer Engineering at Brown. I'm passionate about low level software,
              hardware, and using the two to provide physical solutions in our world. Contact me at <a>devon_kear-leng@brown.edu</a>
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary">Linkedin</button>
              <button className="btn btn-primary">Github</button>
              <button className="btn btn-primary">Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
