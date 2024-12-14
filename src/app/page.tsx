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

    </div>
  );
}
