import React, { useState, useEffect } from "react";

const categories = ["All", "Weddings", "Fashion", "Travel", "Portraits"];

const items = [
  {
    category: "Weddings",
    title: "Golden Hour Wedding",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    category: "Fashion",
    title: "Urban Fashion Editorial",
    img: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    category: "Travel",
    title: "Mountains of Norway",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
  },
  {
    category: "Portraits",
    title: "Moody Portraits",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80"
  },
  {
    category: "Weddings",
    title: "Classic Ceremony",
    img: "https://images.unsplash.com/photo-1515165562835-c4c7f590bfbc?auto=format&fit=crop&w=1000&q=80"
  },
  {
    category: "Fashion",
    title: "Studio Fashion",
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1000&q=80"
  }
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  // Scroll animation
  useEffect(() => {
    const reveal = document.querySelectorAll(".p-reveal");

    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );

    reveal.forEach((el) => obs.observe(el));
  }, []);

  return (
    <section id="portfolio" className="bg-black text-white py-24 overflow-hidden">
      <style>{`
        .p-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .p-reveal.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12 p-reveal">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Our Portfolio
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            A curated selection of our most loved stories.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-14 p-reveal">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`uppercase tracking-widest text-xs md:text-sm transition-all pb-1 ${
                active === c
                  ? "text-pink-400 border-b border-pink-400"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-reveal">
          {items
            .filter((i) => active === "All" || i.category === active)
            .map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-1200 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-all duration-500"></div>

                {/* Text */}
                <div className="absolute bottom-5 left-5 transition-all duration-500 group-hover:bottom-9">
                  <p className="text-lg sm:text-xl font-light">{item.title}</p>
                  <p className="text-xs sm:text-sm text-white/70 mt-1">{item.category}</p>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
