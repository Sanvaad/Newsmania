import React from "react";
import search from "../images/search.svg";

export default function SearchBar() {
  return (
    <div className="flex justify-center mt-10 w-[80vw] bg-[#e7e6e6] ">
      <img src={search} alt="" className="h-10" />
      <input type="text" className=" bg-[#e7e6e6] rounded-[100px] h-10" />
    </div>
  );
}
