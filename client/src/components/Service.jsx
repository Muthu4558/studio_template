import React, { useEffect, useRef } from "react";

/**
 * Added Animations:
 * ✔ Smooth Fade-Up Reveal
 * ✔ Scale-In
 * ✔ Soft Floating on Hover (btn + cards)
 * ✔ Shadow Breathing
 * ✔ Parallax on Feature Card
 * ✔ Staggered Entrance Timing
 */

const services = [
  {
    id: "fashion",
    title: "Fashion Shoot",
    subtitle: "Editorial, high-fashion & runway moments.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "event",
    title: "Event Coverage",
    subtitle: "From candid lantern moments to grand entrances.",
    img: "https://images.unsplash.com/photo-1515165562835-c4c7f590bfbc?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "portraits",
    title: "Bold Portraits",
    subtitle: "High-contrast, editorial portraiture with attitude.",
    img: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "couple",
    title: "Couple Sessions",
    subtitle: "Natural, cinematic storytelling for two.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "travel",
    title: "Travel Stories",
    subtitle: "Documentary-style travel & landscape work.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "joy",
    title: "Joyful Life",
    subtitle: "Lifestyle sessions full of warmth & motion.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function ServiceAlt() {
  const containerRef = useRef(null);
  const featureRef = useRef(null);

  /* -------------------------
     Reveal + Stagger Animations
  -------------------------- */
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll(".reveal"));
    items.forEach((node, idx) => {
      node.style.transitionDelay = `${idx * 120}ms`;
    });

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach(i => obs.observe(i));

    return () => obs.disconnect();
  }, []);

  /* -------------------------
     Smooth Parallax Animation
  -------------------------- */
  useEffect(() => {
    const el = featureRef.current;
    if (!el) return;

    let raf = null;
    const pos = { tx: 0, ty: 0, rz: 0 };

    const move = e => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;

      pos.tx = dx * 12;
      pos.ty = dy * 10;
      pos.rz = dx * 2;

      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${pos.tx}px, ${pos.ty}px) rotate(${pos.rz}deg)`;
        const img = el.querySelector(".feature-img");
        if (img)
          img.style.transform = `scale(1.08) translate(${pos.tx * 0.4}px, ${
            pos.ty * 0.5
          }px)`;
      });
    };

    const leave = () => {
      el.style.transform = "";
      const img = el.querySelector(".feature-img");
      if (img) img.style.transform = "";
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      {/* Global Animation Styles */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px) scale(.96);
          transition: all .9s cubic-bezier(.25, .9, .3, 1);
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .tile-img,
        .feature-img {
          transition: transform 1.2s cubic-bezier(.25,.9,.3,1),
                      filter 1.2s ease;
        }

        article:hover .tile-img {
          transform: scale(1.08);
          filter: brightness(1.05);
        }

        .btn-float {
          transition: transform .4s ease, box-shadow .4s ease;
        }
        .btn-float:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 50, 130, 0.35);
        }

        article {
          transition: transform .6s ease, box-shadow .6s ease;
        }
        article:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 35px rgba(0,0,0,0.35);
        }
      `}</style>

      <section
        id="services"
        className="relative w-full bg-[#050505] text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-6" ref={containerRef}>
          {/* Header */}
          <div className="mb-12 flex items-center justify-between reveal">
            <div>
              <h2 className="text-3xl md:text-4xl font-extralight tracking-wide">
                What We Make
              </h2>
              <p className="text-white/60 mt-2 max-w-xl">
                Curated visual stories — cinematic, editorial and candid.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="#portfolio"
                className="text-sm uppercase tracking-wider text-white/80 hover:text-white transition"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="text-sm uppercase tracking-wider text-pink-300 hover:text-pink-400 transition"
              >
                Book a Session
              </a>
            </div>
          </div>

          {/* Mosaic */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Feature Card */}
            <article
              ref={featureRef}
              className="relative lg:col-span-7 rounded-2xl overflow-hidden group reveal will-change-transform"
            >
              <div
                className="feature-img w-full h-96 lg:h-[560px] bg-center bg-cover"
                style={{ backgroundImage: `url(${services[0].img})` }}
              />
              <div className="absolute left-6 bottom-6 md:left-12 md:bottom-12 max-w-xl">
                <h3 className="text-3xl md:text-4xl font-semibold leading-tight stagger">
                  {services[0].title}
                </h3>
                <p className="mt-4 text-white/80 max-w-lg stagger">
                  {services[0].subtitle}
                </p>

                <div className="mt-6 flex gap-4">
                  <button className="btn-float rounded-full px-6 py-2 bg-pink-500 text-black font-semibold">
                    Explore
                  </button>
                  <button className="btn-float rounded-full px-4 py-2 border border-white/10 text-sm hover:bg-white/5">
                    See Work
                  </button>
                </div>
              </div>
            </article>

            {/* Right Tiles */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              {/* First Row */}
              <div className="grid grid-cols-2 gap-6">
                {services.slice(1, 3).map(s => (
                  <article
                    key={s.id}
                    className="relative rounded-xl overflow-hidden group reveal"
                  >
                    <div
                      className="tile-img w-full h-44 md:h-56 bg-center bg-cover"
                      style={{ backgroundImage: `url(${s.img})` }}
                    />
                    <div className="absolute inset-0 flex items-end">
                      <div className="w-full p-4 bg-linear-to-t from-black/60 to-transparent">
                        <h4 className="text-lg font-semibold">{s.title}</h4>
                        <p className="text-xs text-white/70 mt-2 opacity-0 group-hover:opacity-100 transition">
                          {s.subtitle}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Vertical Tiles */}
              {services.slice(3).map(s => (
                <article
                  key={s.id}
                  className="relative rounded-xl overflow-hidden group reveal"
                >
                  <div
                    className="tile-img w-full h-40 md:h-48 bg-center bg-cover"
                    style={{ backgroundImage: `url(${s.img})` }}
                  />
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full p-4 bg-linear-to-t from-black/60 to-transparent">
                      <h4 className="text-lg font-semibold">{s.title}</h4>
                      <p className="text-xs text-white/70 mt-2 opacity-0 group-hover:opacity-100 transition">
                        {s.subtitle}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
