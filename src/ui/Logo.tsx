import React from "react";
import logo from "../images/logo.png";

export default function Logo() {
  return (
    <div className="text-[1.6rem] mt-10 mb-10 flex gap-3">
      <img src={logo} alt="" className="h-10" />
      <h2>NEWSMANIA</h2>
    </div>
  );
}
