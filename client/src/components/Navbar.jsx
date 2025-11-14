import React, { useState, useEffect } from "react";
import logo from "../assets/react.svg";
import "../index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    "Home",
    "About Us",
    "Destination",
    "Films",
    "Photography",
    "Poetry",
    "Blog",
    "Book Us",
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 pointer-events-none 
        transition-all duration-500
        ${scrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="pointer-events-auto relative">
          <div className="flex items-center justify-between h-24">
            {/* left logo */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            </div>

            {/* centered nav links */}
            <ul className="hidden md:flex gap-10 text-sm tracking-widest uppercase text-white/90">
              {links.map((l) => (
                <li key={l} className="relative group">
                  <button className="py-2 px-1 transition-colors duration-200 group-hover:text-white">
                    {l}
                  </button>
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 w-0 bg-linear-to-r from-pink-400 to-yellow-300 transition-all duration-300 group-hover:w-full opacity-20"></span>
                </li>
              ))}
            </ul>

            {/* right: INFO + fancy toggle */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4 uppercase text-xs tracking-widest opacity-90">
                <span>INFO</span>
                <div className="w-8 h-0.5 bg-white/40" />
              </div>

              {/* fancy toggle */}
              <button
                onClick={() => setOpen((s) => !s)}
                aria-expanded={open}
                aria-label="Toggle menu"
                className={`md:hidden menu-toggle relative w-14 h-14 rounded-full flex items-center justify-center focus:outline-none`}
              >
                <svg viewBox="0 0 64 64" className="w-8 h-8" aria-hidden>
                  <g className={`lines ${open ? "open" : ""}`}>
                    <rect className="l1" x="14" y="20" width="36" height="3" rx="1.5" />
                    <rect className="l2" x="14" y="30.5" width="36" height="3" rx="1.5" />
                    <rect className="l3" x="14" y="41" width="36" height="3" rx="1.5" />
                  </g>
                </svg>

                <span className={`ring-anim ${open ? "active" : ""}`} aria-hidden />
              </button>
            </div>
          </div>

          {/* mobile dropdown */}
          {open && (
            <div className="md:hidden mt-2 bg-black/60 backdrop-blur-md rounded-b-xl py-6 text-center shadow-2xl">
              <ul className="space-y-4 uppercase tracking-wider">
                {links.map((l) => (
                  <li key={l} className="text-lg" onClick={() => setOpen(false)}>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
