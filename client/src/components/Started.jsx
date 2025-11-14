import React, { useEffect, useState } from "react";

const bgImages = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1524503033411-c9566986fc8f",
];

export default function Started() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      
      {/* Background — smooth fade */}
      {bgImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1200 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img}?auto=format&fit=crop&w=1500&q=80)`,
          }}
        ></div>
      ))}

      {/* Soft light overlay */}
      <div className="absolute inset-0 bg-white/10 mix-blend-overlay pointer-events-none"></div>

      {/* Light fog layer for cinematic depth */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

      {/* Center Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4 drop-shadow-xl">
          Let’s Get Started
        </h2>

        <p className="text-lg md:text-xl text-white/85 mb-8 max-w-xl leading-relaxed drop-shadow-lg">
          Start Your Visual Journey. At Lenzia, every story deserves to be seen
          through the right lens. Let’s collaborate to capture your personality,
          passion, and the moments that matter most.
        </p>

        <button className="px-10 py-3 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 shadow-xl">
          Book a Session
        </button>
      </div>
    </section>
  );
}
