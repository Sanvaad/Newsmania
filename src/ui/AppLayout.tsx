import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function AppLayout() {
  return (
    <div className="">
      <Nav />
      <Outlet />
    </div>
  );
}
