"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Logo />

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 text-sm font-medium">
          <li className="hover:text-black cursor-pointer">Features</li>
          <li className="hover:text-black cursor-pointer">How it Works</li>
          <li className="hover:text-black cursor-pointer">Testimonials</li>
          <li className="hover:text-black cursor-pointer">Pricing</li>
        </ul>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-gray-600 text-sm">
            Sign In
          </Link>
          <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium">
            Get Started
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-6 flex flex-col gap-4 text-gray-700 text-sm">
            <span>Features</span>
            <span>How it Works</span>
            <span>Testimonials</span>
            <span>Pricing</span>

            <hr className="my-2" />

            <Link href="/login" className="text-gray-600 hover:text-gray-900 transition">
              Sign In
            </Link>


            <button className="mt-2 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
