import React from "react";
import { NavLink } from "react-router-dom";
// import profile from "../images/profile.svg";
// import bookmarkfill from "../images/bookmarkfill.svg";
// import pencil from "../images/pencil.svg";
import Logo from "./Logo";

import profile from "../images/profile.svg";
import logout from "../images/logout.svg";
import bookmarkoutline from "../images/bookmarkoutline.svg";
import Logout from "../features/authentication/Logout";
// import logo from "../images/logo.png";
// import Logout from "../features/authentication/Logout";

export default function wNav() {
  return (
    <header className=" w-[85vw] mx-auto  mb-[3rem]">
      <nav className="flex justify-between w-full  items-center  h-[10vh] ">
        <NavLink to="/" className=" flex items-center gap-4 ">
          <Logo />
        </NavLink>

        <div className="flex gap-4">
          <NavLink to="/bookmark">
            <img src={bookmarkoutline} alt="" className="h-8" />
          </NavLink>

          <Logout />
        </div>
      </nav>
    </header>
  );
}
