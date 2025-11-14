import React, { useEffect, useRef, useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import slide1 from "../assets/1.png";
import slide2 from "../assets/2.png";
import slide3 from "../assets/3.png";
import "../index.css";

/**
 * Slides array now contains objects: { src, title, subtitle }
 * Edit titles/subtitles to your preferred copy.
 */
const slides = [
  {
    src: slide1,
    title: "Eternal Moments",
    subtitle: "Cinematic wedding portraits that tell your love story",
  },
  {
    src: slide2,
    title: "Golden Destinations",
    subtitle: "Destination photography with a cinematic touch",
  },
  {
    src: slide3,
    title: "Fine Art Frames",
    subtitle: "Timeless editorial & portrait photography",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const autoRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line
  }, [paused]);

  // announce slide change for screen readers
  const liveRef = useRef(null);
  useEffect(() => {
    if (liveRef.current) {
      liveRef.current.textContent = `${slides[index].title} — ${slides[index].subtitle}`;
    }
  }, [index]);

  function startAuto() {
    if (autoRef.current || paused) return;
    autoRef.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
  }
  function stopAuto() {
    if (!autoRef.current) return;
    clearInterval(autoRef.current);
    autoRef.current = null;
  }
  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => { setPaused(true); stopAuto(); }}
      onMouseLeave={() => { setPaused(false); startAuto(); }}
    >
      {/* slides: full cover */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-900 ease-out ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            style={{ backgroundImage: `url(${s.src})` }}
            aria-hidden
          />
        ))}

        {/* LIGHT overlay: soft brightening + vignette to lift text */}
        <div className="absolute inset-0 pointer-events-none">
          {/* soft light layer */}
          <div className="absolute inset-0 bg-white/6 mix-blend-screen" />
          {/* subtle vignette bottom to darken lower edges */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/5 to-black/40" />
        </div>
      </div>

      {/* Title & subtitle (centered above dots) */}
      <div className="relative z-20 w-full h-full flex flex-col justify-end items-center pb-44 px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-2xl">
            {slides[index].title}
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto drop-shadow">
            {slides[index].subtitle}
          </p>
        </div>

        {/* aria-live for screen readers */}
        <div className="sr-only" aria-live="polite" ref={liveRef} />

        {/* spacing between text and dots */}
        <div className="h-8" />
        {/* fancy 3-dot UI: center-bottom */}
        <div className="flex items-center gap-6 mt-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`orb-dot ${i === index ? "active" : ""}`}
              aria-label={`Slide ${i + 1}: ${slides[i].title}`}
            >
              {/* inline SVG diamond (animated) */}
              <svg viewBox="0 0 24 24" className="diamond-svg" aria-hidden>
                <defs>
                  <linearGradient id={`g-${i}`} x1="0" x2="1">
                    <stop offset="0" stopColor="#ff9db6" />
                    <stop offset="1" stopColor="#ff6f9b" />
                  </linearGradient>
                </defs>
                <g transform="translate(12,12)">
                  <rect x="-6" y="-6" width="12" height="12" rx="2" ry="2" transform="rotate(45)" className="diamond" fill={`url(#g-${i})`} />
                </g>
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* right vertical controls */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-6">
        <button onClick={goPrev} className="circle-control" aria-label="previous slide">
          <FiChevronUp size={18} />
        </button>

        <div className="text-sm tracking-widest text-white/90">{index + 1} / {slides.length}</div>

        <button onClick={goNext} className="circle-control" aria-label="next slide">
          <FiChevronDown size={18} />
        </button>
      </div>
      
    </section>
  );
}
