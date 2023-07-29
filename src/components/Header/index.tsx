import React from "react";
import MenuItem from "../MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
const Header = () => {
  return (
    <nav className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" linkAddress="/" Icon={AiFillHome} />
        <MenuItem
          title="ABOUT"
          linkAddress="/about"
          Icon={BsFillInfoCircleFill}
        />
      </div>
      <div className="">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDb</span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </nav>
  );
};
export { Header };