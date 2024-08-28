"use client";

import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";

const buttons: string[] = ["Home", "Projects", "Resume"];

export default function CustomMenu() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {/* Button to toggle the menu */}
      <button
        className="lg:hidden text-white"
        onClick={() => setIsClicked((prevState) => !prevState)}
      >
        {!isClicked && <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isClicked && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-100 ${
            isClicked ? "opacity-100" : "opacity-0"
          } z-40`}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/4 text-white z-50 border-l-inherit transform transition-transform duration-300 ${
          isClicked ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsClicked(false)}
        >
          <X size={20} />
        </button>
        <div className="flex flex-col h-full p-4 mt-12">
          {buttons.map((button, idx) => (
            <Button
              key={idx}
              variant={"outline"}
              className="w-full mb-4 flex justify-center"
            >
              {button}
              {button === "Resume" && <Download size={18} />}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
