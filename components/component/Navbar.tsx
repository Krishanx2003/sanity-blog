import React from "react"; // Don't forget to import React
import { Button } from "../ui/button";
import Link from "next/link";
 // Correct import path

export function Navbar() {
  return (
    <div className="bg-black text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <img alt="Aihubpro" className="h-8" src="/placeholder.svg" />
            <a className="text-white hover:text-gray-300" href="#">
              Research
            </a>
            <a className="text-white hover:text-gray-300" href="#">
              API
            </a>
            <a className="text-white hover:text-gray-300" href="#">
              ChatGPT
            </a>
            <a className="text-white hover:text-gray-300" href="/Blogs">
              Blogs
            </a>
            <a className="text-white hover:text-gray-300" href="#">
              Company
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a className="text-white hover:text-gray-300" href="#">
              Search
            </a>
            <a className="text-white hover:text-gray-300" href="#">
              Log in
            </a>
            <Button className="bg-[#bd1e59] text-white">Try ChatGPT</Button>
          </div>
        </nav>
      </header>
    </div>
  );
}
