import React, { useRef } from "react";
import google from "../assets/google.png";

export default function RegisterPage() {
  const container = useRef(null);
  return (
    <div
      ref={container}
      className="relative min-h-screen overflow-hidden flex justify-center items-center select-none *:select-none"
    >
      <div className="flex flex-col gap-4 items-center justify-center bg-surface border border-border rounded-lg px-8 py-8">
        <h2 className="text-2xl font-bold">Register</h2>
        <div className="flex items-center justify-center select-none *:select-none">
          <button className="flex justify-center items-center gap-3 bg-bg/70 duration-300 transition-all hover:bg-hover border border-border rounded-full px-5 p-2">
            <img className="w-5 h-5" src={google} alt="google" />
            <span className="font-light text-subtext text-[0.94rem]">
              Register with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
