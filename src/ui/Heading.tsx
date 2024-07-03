import React from "react";

export default function Heading() {
  return (
    <>
      <div className="bg-[#eae7e7] py-10  w-[85vw] flex flex-col mx-auto  justify-center mb-10  ">
        <div className="text-center w-[60%] flex flex-col justify-center mx-auto tracking-widest 		">
          <h2 className="text-[1.2rem] text-[#565555 ] ">
            Welcome To Newsmania
          </h2>
          <p className="text-[1.5rem]   ">
            Craft narratives ✍️ that ignite
            <span className="text-red-600"> insipration</span>💡
            <span className="text-red-600"> knowledge 📕</span> and
            <span className="text-red-600"> entertainment</span>🎬
          </p>
        </div>
      </div>
      <h2 className="flex justify-center text-[1.4rem] font-bold tracking-wide mb-10">
        LATEST NEWS 👀
      </h2>
    </>
  );
}
