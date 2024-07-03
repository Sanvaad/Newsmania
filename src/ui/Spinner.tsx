import React, { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";

export default function Spinner() {
  return (
    <div className="h-screen w-screen flex justify-center my-auto">
      <GridLoader />
    </div>
  );
}
