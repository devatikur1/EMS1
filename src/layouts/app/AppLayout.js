import React from "react";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div
      className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-bg  text-text *:text-text animate-bg-dots"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(159, 159, 169, 0.4) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    >
      <Outlet />
    </div>
  );
}
