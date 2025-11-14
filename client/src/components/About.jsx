import React, { useEffect, useRef, useState } from "react";

// timeline data
const timeline = [
  { year: "2016", text: "Studio founded — small team, big dreams." },
  { year: "2018", text: "First international destination wedding." },
  { year: "2020", text: "Expanded into film & editorial work." },
  { year: "2023", text: "Awarded Best Cinematic Studio (regional)." },
];

const team = [
  {
    name: "Anya Kapoor",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Rahul Mehta",
    role: "Lead Photographer",
    img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Priya Nair",
    role: "Colorist & Retouch",
    img: "https://images.unsplash.com/photo-1545996124-1f0b4f5f3b56?auto=format&fit=crop&w=800&q=60",
  },
];

export default function About() {
  const countersRef = useRef(null);
  const [counts, setCounts] = useState({
    clients: 0,
    shoots: 0,
    awards: 0,
  });

  // animate counters when visible
  useEffect(() => {
    const node = countersRef.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCount("clients", 120, 1400);
            animateCount("shoots", 980, 1400);
            animateCount("awards", 18, 1400);
            obs.unobserve(node);
          }
        });
      },
      { threshold: 0.25 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // counter easing animation
  function animateCount(key, to, duration = 1500) {
    const start = performance.now();

    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCounts((p) => ({ ...p, [key]: Math.floor(eased * to) }));
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  // SMOOTH REVEAL ANIMATION (fade + slide + stagger)
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="relative bg-black text-white py-24 md:py-32">
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .reveal.show {
          opacity: 1;
          transform: translateY(0px);
        }
        .reveal.fade-left { transform: translateX(-40px); }
        .reveal.fade-left.show { transform: translateX(0); }
        .reveal.fade-right { transform: translateX(40px); }
        .reveal.fade-right.show { transform: translateX(0); }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* Intro section */}
        <div className="grid md:grid-cols-12 gap-10 items-center mb-20">

          {/* IMAGE */}
          <div className="md:col-span-7 reveal fade-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div
                className="w-full h-[430px] bg-cover bg-center transition-transform duration-1200 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700"></div>
            </div>
          </div>

          {/* CONTENT TEXT */}
          <div className="md:col-span-5 reveal fade-left">
            <p className="text-sm uppercase tracking-widest text-pink-300 mb-3">
              About Mystic Studios
            </p>

            <h2 className="text-4xl md:text-5xl font-light mb-5 leading-tight">
              We craft cinematic stories,<br /> frame by frame.
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-6">
              For the last decade we’ve been capturing weddings, editorials and
              travel stories with a cinematic eye. Every frame is built with
              emotion, light and narrative.
            </p>

            {/* COUNTERS */}
            <div ref={countersRef} className="flex gap-10 mb-8">
              <div>
                <div className="text-4xl font-bold">{counts.clients}+</div>
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Clients
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold">{counts.shoots}+</div>
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Shoots
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold">{counts.awards}</div>
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Awards
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <a className="px-6 py-3 rounded-full bg-pink-500 text-black font-semibold shadow-lg hover:bg-pink-400 transition-all">
                Work with us
              </a>
              <a className="px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all">
                See portfolio
              </a>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="reveal mb-16">
          <h3 className="text-xl font-semibold mb-6">Our Journey</h3>

          <div className="grid md:grid-cols-4 gap-10">
            {timeline.map((t, i) => (
              <div key={i} className="reveal fade-up delay-[i*150]">
                <div className="text-3xl font-bold text-pink-400">{t.year}</div>
                <p className="text-white/70 mt-3">{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM + VALUES */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* values */}
          <div className="reveal fade-right">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <ul className="space-y-4 text-white/70">
              <li><b className="text-white">Authenticity</b> — honest images that feel real.</li>
              <li><b className="text-white">Emotion</b> — frames that make you feel.</li>
              <li><b className="text-white">Craft</b> — precision in light & color.</li>
            </ul>
          </div>

          {/* team */}
          <div className="reveal fade-left">
            <h3 className="text-xl font-semibold mb-4">Meet the Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {team.map((t, i) => (
                <div
                  key={i}
                  className="group rounded-xl overflow-hidden bg-white/5 p-2 reveal fade-up"
                >
                  <img
                    src={t.img}
                    className="w-full h-36 object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                  />
                  <p className="mt-3 font-semibold">{t.name}</p>
                  <p className="text-sm text-white/60">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
