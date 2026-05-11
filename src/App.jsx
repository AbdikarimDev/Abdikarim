import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  EnvelopeSimple,
  MapPin,
  GlobeHemisphereEast,
  LinkedinLogo,
  GithubLogo,
  TwitterLogo,
  ArrowUpRight,
  ArrowRight,
} from "phosphor-react";
import toast, { Toaster } from "react-hot-toast";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

// ─── Asset imports ─────────────────────────────────────────────────────────
import image from "./assets/aaa.png";
import system from "./assets/system.png";
import system2 from "./assets/system2.png";
import system3 from "./assets/system3.png";
import whiteSpace from "./assets/whiteSpace.png";
import todoImage from "./assets/todolist.png";
import loginImg from "./assets/login.png";
import viewImg from "./assets/view.png";
import addImg from "./assets/add.png";
import trackImg from "./assets/track.jpg";
import nameImg from "./assets/name.jpg";
import getImg from "./assets/get.jpg";
import dashImg from "./assets/dash.jpg";
import congrImg from "./assets/congr.jpg";
import logoImg from "./assets/logo.jpg";
import moshify from "./assets/moshify.png";
import abdikarim from "./assets/Me.png";
import RepairShop from "./assets/RepairShop.png";

// ─── Google Fonts injected once ────────────────────────────────────────────
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Custom cursor + scrollbar + selection styles
    const style = document.createElement("style");
    style.textContent = `
      html { scroll-behavior: smooth; }
      body { cursor: none; overflow-x: hidden; }
      ::-webkit-scrollbar { width: 2px; }
      ::-webkit-scrollbar-track { background: #09090e; }
      ::-webkit-scrollbar-thumb { background: #6b5320; border-radius: 1px; }
      ::selection { background: #C9A84C; color: #09090e; }
      .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
      .font-mono { font-family: 'DM Mono', monospace; }
      .font-body { font-family: 'DM Sans', sans-serif; }
      .text-gold { color: #C9A84C; }
      .border-gold { border-color: #C9A84C; }
      .bg-gold { background-color: #C9A84C; }
      .hero-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(80px, 11vw, 148px); line-height: 0.9; letter-spacing: 0.02em; }
      .hero-outline { -webkit-text-stroke: 1px #EDEAE2; color: transparent; }
      .section-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(44px, 6vw, 88px); line-height: 0.92; }
      .project-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(28px, 4vw, 52px); line-height: 0.95; }
      .cursor-dot { width: 7px; height: 7px; background: #C9A84C; border-radius: 50%; position: fixed; pointer-events: none; z-index: 9990; transform: translate(-50%, -50%); }
      .cursor-ring { width: 34px; height: 34px; border: 1px solid rgba(201,168,76,0.55); border-radius: 50%; position: fixed; pointer-events: none; z-index: 9989; transform: translate(-50%, -50%); transition: width 0.2s, height 0.2s, background 0.2s, border-color 0.2s; }
      .cursor-ring.big { width: 52px; height: 52px; background: rgba(201,168,76,0.07); border-color: #C9A84C; }
      .noise-overlay { position: fixed; inset: 0; pointer-events: none; z-index: 9999; opacity: 0.35; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E"); }
      .skill-tile:hover .skill-hover-bg { transform: translateY(0); }
      .skill-hover-bg { transform: translateY(100%); transition: transform 0.3s ease; }
      .hero-frame::before { content: ''; position: absolute; top: -1px; right: -1px; width: 55%; height: 55%; border-top: 1px solid #C9A84C; border-right: 1px solid #C9A84C; z-index: 2; pointer-events: none; }
      .hero-frame::after { content: ''; position: absolute; bottom: -1px; left: -1px; width: 55%; height: 55%; border-bottom: 1px solid #C9A84C; border-left: 1px solid #C9A84C; z-index: 2; pointer-events: none; }
      .project-card-line::after { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; background: #C9A84C; transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease; }
      .project-card-line:hover::after { transform: scaleX(1); }
      .form-field input:focus ~ label, .form-field input:not(:placeholder-shown) ~ label,
      .form-field textarea:focus ~ label, .form-field textarea:not(:placeholder-shown) ~ label { top: 8px; font-size: 9px; color: #C9A84C; }
      .form-field::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: #C9A84C; transform: scaleX(0); transition: transform 0.3s ease; }
      .form-field:focus-within::after { transform: scaleX(1); }
      .marquee-track { animation: marquee 28s linear infinite; white-space: nowrap; display: flex; }
      .marquee-track:hover { animation-play-state: paused; }
      @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      .scroll-line { width: 1px; height: 60px; background: linear-gradient(to bottom, #C9A84C, transparent); animation: spulse 2s ease-in-out infinite; }
      @keyframes spulse { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }
      .about-img-label { position: absolute; top: 24px; left: -28px; background: #C9A84C; color: #09090e; padding: 8px 13px; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; writing-mode: vertical-rl; transform: rotate(180deg); font-family: 'DM Mono', monospace; }
      .contact-h2 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(52px, 8vw, 108px); line-height: 0.9; }
      @media (max-width: 768px) { .about-img-label { display: none; } }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return null;
};

// ─── Cursor ────────────────────────────────────────────────────────────────
const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [big, setBig] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", onMove);

    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, 0.1);
      ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, 0.1);
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + "px";
        ringRef.current.style.top = ringPos.current.y + "px";
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();

    const onEnter = () => setBig(true);
    const onLeave = () => setBig(false);
    const targets = document.querySelectorAll(
      "a,button,.skill-tile,.project-card-line",
    );
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${big ? "big" : ""}`} />
    </>
  );
};

// ─── Fade-up wrapper ────────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── Section label ──────────────────────────────────────────────────────────
const SectionLabel = ({ num, text }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="font-mono text-xs text-gold">{num}</span>
    <div className="w-10 h-px bg-yellow-700/40" />
    <span className="font-mono text-xs tracking-widest uppercase text-zinc-600">
      {text}
    </span>
  </div>
);

// ─── Data ──────────────────────────────────────────────────────────────────
const SKILLS = [
  { name: "React", cat: "Frontend" },
  { name: "Vue 3", cat: "Frontend" },
  { name: "TypeScript", cat: "Language" },
  { name: "JavaScript", cat: "Language" },
  { name: "Tailwind CSS", cat: "Styling" },
  { name: "React Native", cat: "Mobile" },
  { name: "HTML / CSS", cat: "Foundation" },
  { name: "Firebase", cat: "Backend" },
  { name: "Laravel", cat: "Backend" },
  { name: "Pinia", cat: "State" },
  { name: "Figma", cat: "Design" },
  { name: "Git / GitHub", cat: "Tools" },
  { name: "Vite", cat: "Build" },
  { name: "Postman", cat: "Tools" },
];

const FEATURED = [
  {
    id: 1,
    num: "01",
    title: "Client Dashboard",
    sub: "Metrics & Contributions Manager",
    desc: "Built for a client — full CRUD dashboard for tracking user contributions with real-time Firebase sync. Metrics overview, filterable history, and secure authentication.",
    tags: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    shots: [system2, system, system3],
  },
  {
    id: 2,
    num: "02",
    title: "DailyTrack",
    sub: "Expense & Inventory System",
    desc: "Business tool for tracking daily expenses and inventory in real time. Full CRUD with filters, edit/delete, live cost totals, dark mode, and responsive design.",
    tags: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    shots: [loginImg, addImg, viewImg],
  },
  {
    id: 3,
    num: "03",
    title: "FreshBowl",
    sub: "Mobile App UI/UX — React Native",
    desc: "End-to-end mobile UI for a food ordering app — onboarding, browsing, checkout, and order tracking. Designed for clarity and conversion.",
    tags: ["React Native", "TypeScript", "Tailwind CSS", "Figma"],
    shots: [logoImg, nameImg, getImg, dashImg, trackImg, congrImg],
  },
];

const PUBLIC_PROJECTS = [
  {
    id: 4,
    num: "04",
    title: "NovaPOS",
    sub: "Point of Sale System",
    desc: "Full-featured browser-based POS for retail and restaurants — product catalog, cart, transaction history, and Firebase real-time sync.",
    tags: ["Vue 3", "Firebase", "Tailwind CSS"],
    img: RepairShop,
    link: "https://calculation-proj.vercel.app/",
  },
  {
    id: 5,
    num: "05",
    title: "TaskFlow",
    sub: "Real-Time Task Manager",
    desc: "Reactive task manager with persistent cross-device storage, favorites, and instant updates. Demonstrates Pinia state management at scale.",
    tags: ["Vue 3", "Pinia", "Firebase", "Tailwind CSS"],
    img: todoImage,
    link: "https://pinia-todo-list-three.vercel.app/",
  },
  {
    id: 6,
    num: "06",
    title: "Moshify",
    sub: "SaaS Landing Page",
    desc: "Production-level rebuild of a cloud hosting landing page. Responsive layout, clean Tailwind structure, and performance-focused delivery.",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    img: moshify,
    link: "https://moshify-tau.vercel.app/",
  },
  {
    id: 7,
    num: "07",
    title: "Whitepace",
    sub: "SaaS Landing Page UI",
    desc: "Modern, responsive marketing page with mobile nav toggle, structured content sections, and performance-optimized layout.",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    img: whiteSpace,
    link: "https://whitespace12.vercel.app/",
  },
];

const NAV_ITEMS = ["home", "about", "skills", "projects", "contact"];

// ─── Portfolio ─────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const y = window.scrollY + 130;
      for (const id of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActive(id);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xgiqm6j",
        "template_3ooghfz",
        formRef.current,
        "kr4s2Oa78VlQNVqCR",
      )
      .then(() => {
        toast.success("Message sent!");
        formRef.current.reset();
      })
      .catch(() => toast.error("Failed to send."));
  };

  return (
    <div className="font-body bg-[#09090E] text-[#EDEAE2] min-h-screen overflow-x-hidden flex flex-col gap-10">
      <FontLoader />
      <Cursor />
      <div className="noise-overlay" />

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#13131e",
            color: "#EDEAE2",
            border: "1px solid rgba(201,168,76,0.25)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
          },
        }}
      />

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 
          border-b border-white/[0.055] backdrop-blur-2xl transition-all duration-300
          bg-[#09090e]/80
          ${scrolled ? "py-3" : "py-5"}
          max-md:px-5`}
      >
        <div className="font-display text-xl tracking-widest flex items-center gap-2.5 text-[#EDEAE2]">
          <img
            src={abdikarim}
            alt=""
            className="w-8 h-8 rounded-full object-cover border border-yellow-700/40"
          />
          Abdikarim
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className={`font-mono text-xs tracking-widest uppercase relative pb-1 transition-colors duration-200 cursor-none
                  ${active === item ? "text-[#EDEAE2]" : "text-zinc-500 hover:text-[#EDEAE2]"}`}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-px bg-yellow-500 transition-transform duration-300 origin-left
                    ${active === item ? "scale-x-100" : "scale-x-0"}`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-none p-1 ham ${menuOpen ? "x" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="block w-[22px] h-[1.5px] bg-[#EDEAE2] transition-all duration-300" />
          <span className="block w-[22px] h-[1.5px] bg-[#EDEAE2] transition-all duration-300" />
          <span className="block w-[22px] h-[1.5px] bg-[#EDEAE2] transition-all duration-300" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#09090e] z-40 flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item}
                onClick={() => scrollTo(item)}
                className="font-display text-5xl tracking-wide text-zinc-500 hover:text-gold transition-colors duration-200 cursor-none bg-transparent border-none"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {item.toUpperCase()}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="min-h-screen bg-black flex items-center relative overflow-hidden pt-20"
      >
        <div className="max-w-[1200px] mx-auto px-12 w-full max-md:px-5">
          <div className="flex justify-between items-center  ">
            {/* Left */}
            <div>
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-9 h-px bg-yellow-500" />
                <span className="font-mono text-xs tracking-[0.18em] uppercase text-gold">
                  Frontend Developer
                </span>
              </motion.div>

              <motion.h1
                className="hero-title mb-7"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="hero-outline block">Building</span>
                <span className="block text-[#EDEAE2]">Digital</span>
                <span className="block text-gold">Products</span>
              </motion.h1>

              <motion.p
                className="text-[17px] font-light text-zinc-400 max-w-[430px] leading-[1.75] mb-11"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                I'm{" "}
                <strong className="text-[#EDEAE2] font-medium">
                  Abdikarim
                </strong>{" "}
                — turning ideas into fast, responsive web apps with{" "}
                <strong className="text-[#EDEAE2] font-medium">
                  React, Vue & TypeScript
                </strong>
              </motion.p>

              <motion.div
                className="flex gap-3 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38 }}
              >
                <button
                  onClick={() => scrollTo("projects")}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-[#09090e] text-xs font-semibold tracking-widest uppercase border-none cursor-none transition-all duration-200 hover:-translate-y-0.5"
                >
                  View Work <ArrowRight size={13} weight="bold" />
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 hover:border-yellow-500/60 text-[#EDEAE2] hover:text-gold text-xs font-medium tracking-widest uppercase cursor-none transition-all duration-200 hover:-translate-y-0.5"
                >
                  Get In Touch
                </button>
              </motion.div>
            </div>

            {/* Right — photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className="bg-black flex items-end justify-center overflow-hidden"
                style={{
                 }}
              >
                <img
                  src={image}
                  alt="Abdikarim"
                  className="w-full h-full object-cover object-top"
                  onMouseEnter={(e) =>
                    (e.target.style.filter = "grayscale(0%)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.filter = "grayscale(15%)")
                  }
                />
              </div>

              {/* Stats below photo */}
              <div
                className="flex justify-end items-center   mt-[1px] bg-black"
                style={{ gap: "1px"}}
              >
                {[
                  { num: "10+", label: "Projects Built" },
                  { num: "1+", label: "Years Experience" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#000] px-5 py-5">
                    <div className="font-display text-4xl text-gold leading-none">
                      {s.num}
                    </div>
                    <div className="font-mono text-[11px] text-zinc-600 mt-1 tracking-wide">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative big text BG */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#4e4c4c49] font-display pointer-events-none select-none"
          style={{
            fontSize: "clamp(180px, 25vw, 320px)",
            lineHeight: 1,
          }}
        >
          DEV
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────────────── */}
      <div className="border-t border-b border-white/[0.055] bg-[#0e0e16] py-5 overflow-hidden">
        <div className="marquee-track">
          {[
            "React",
            "Vue 3",
            "TypeScript",
            "Tailwind CSS",
            "Firebase",
            "React Native",
            "JavaScript",
            "Figma",
            "Pinia",
            "Laravel",
            "React",
            "Vue 3",
            "TypeScript",
            "Tailwind CSS",
            "Firebase",
            "React Native",
            "JavaScript",
            "Figma",
            "Pinia",
            "Laravel",
          ].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-5 px-8 font-display text-base tracking-widest text-zinc-700"
            >
              <span className="w-1 h-1 rounded-full bg-yellow-600 flex-shrink-0 inline-block" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="sec">
        <div className="max-w-[1200px] mx-auto px-12 max-md:px-5">
          <div className="grid grid-cols-2 gap-24 items-start max-lg:grid-cols-1 max-lg:gap-14">
            {/* Text */}
            <div>
              <FadeUp>
                <SectionLabel num="01" text="About Me" />
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="section-title mb-8">
                  I build
                  <br />
                  <span className="text-gold">things</span>
                  <br />
                  that work.
                </h2>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-zinc-400 font-light text-[16px] leading-[1.8] mb-5">
                  I'm a{" "}
                  <strong className="text-[#EDEAE2] font-medium">
                    Frontend Developer
                  </strong>{" "}
                  with over a year of hands-on experience building dashboards,
                  landing pages, and mobile UIs
                </p>
              </FadeUp>
              <FadeUp delay={0.28}>
                <p className="text-zinc-400 font-light text-[16px] leading-[1.8] mb-5">
                  Stack:{" "}
                  <strong className="text-[#EDEAE2] font-medium">
                    React, Vue, TypeScript, JavaScript, Tailwind CSS, Firebase,
                  </strong>{" "}
                  and React Native for mobile. I focus on clean code, fast
                  interfaces, and UI that makes sense to the people using it.
                </p>
              </FadeUp>
              <FadeUp delay={0.36}>
                <p className="text-zinc-400 font-light text-[16px] leading-[1.8]">
                  I care about the details — spacing, performance, and the small
                  interactions that make a product feel polished. Always open to
                  interesting projects and collaborations.
                </p>
              </FadeUp>

              {/* Metrics */}
              <FadeUp delay={0.44}>
                <div
                  className="grid grid-cols-3 mt-12"
                  style={{ gap: "1px", background: "rgba(255,255,255,0.055)" }}
                >
                  {[
                    { num: "10+", label: "Projects" },
                    { num: "1+", label: "Years Exp." },
                    { num: "10+", label: "Technologies" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="bg-[#09090e] py-7 text-center"
                    >
                      <div className="font-display text-5xl text-gold leading-none">
                        {m.num}
                      </div>
                      <div className="font-mono text-[10px] text-zinc-600 mt-1.5 tracking-widest uppercase">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Image */}
            <FadeUp delay={0.15}>
              <div className="relative"> 
                <img
                  src={image}
                  alt="Abdikarim"
                  className="w-full object-cover object-top block"
                  style={{ aspectRatio: "3/4" }}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <section
        id="skills"
        className="sec border-t border-b border-white/[0.055] bg-[#0e0e16]"
      >
        <div className="max-w-[1200px] mx-auto px-12 max-md:px-5">
          <div className="flex justify-between items-end mb-16 max-md:flex-col max-md:items-start max-md:gap-6">
            <div>
              <FadeUp>
                <SectionLabel num="02" text="Skills" />
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="section-title">
                  My
                  <br />
                  <span className="text-gold">Stack.</span>
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.2}>
              <p className="max-w-[280px] text-[15px] text-zinc-500 font-light leading-[1.75]">
                Tools and technologies I work with daily to build fast,
                scalable, production-ready interfaces.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.15}>
            <div
              className="grid"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: "1px",
                background: "rgba(255,255,255,0.055)",
              }}
            >
              {SKILLS.map((s, i) => (
                <div
                  key={i}
                  className="skill-tile relative overflow-hidden bg-[#0e0e16] px-5 py-7 text-center cursor-none"
                >
                  <div
                    className="skill-hover-bg absolute inset-0 bg-yellow-500"
                    style={{
                      transform: "translateY(100%)",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      const parent = e.currentTarget.closest(".skill-tile");
                      parent.querySelector(".sk-name").style.color = "#09090e";
                      parent.querySelector(".sk-cat").style.color = "#09090e";
                      parent.querySelector(".sk-cat").style.opacity = "0.55";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(100%)";
                      const parent = e.currentTarget.closest(".skill-tile");
                      parent.querySelector(".sk-name").style.color = "";
                      parent.querySelector(".sk-cat").style.color = "";
                      parent.querySelector(".sk-cat").style.opacity = "";
                    }}
                  />
                  <div className="sk-name relative z-10 text-sm font-medium text-[#EDEAE2] transition-colors duration-200">
                    {s.name}
                  </div>
                  <div className="sk-cat relative z-10 font-mono text-[10px] text-zinc-600 mt-1 tracking-wide transition-colors duration-200">
                    {s.cat}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section id="projects" className="sec">
        <div className="max-w-[1200px]  mx-auto px-12 max-md:px-5">
          {/* Header */}
          <div className="flex justify-between items-end mb-20 max-md:flex-col max-md:items-start max-md:gap-6">
            <div>
              <FadeUp>
                <SectionLabel num="03" text="Work" />
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="section-title">
                  Featured
                  <br />
                  <span className="text-gold">Projects.</span>
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.2}>
              <p className="max-w-[320px] text-[15px] text-zinc-500 font-light leading-[1.75]">
                A curated selection from 10+ projects. Real clients, real
                problems, real solutions.
              </p>
            </FadeUp>
          </div>

          {/* ── Featured client projects (screenshots) ── */}
          <PhotoProvider>
            <div className="flex flex-col gap-7">
              {FEATURED.map((p, idx) => (
                <FadeUp key={p.id} delay={idx * 0.08}>
                  <div
                    className="grid grid-cols-2 max-lg:grid-cols-1"
                    style={{
                      minHeight: 420,
                      background: "rgba(255,255,255,0.055)",
                      gap: "1px",
                    }}
                  >
                    {/* Screenshots grid */}
                    <div
                      className="grid grid-cols-2 bg-[#191927] gap-1"
                      style={{ gap: "1px" }}
                    >
                      {p.shots.slice(0, 4).map((img, j) => (
                        <PhotoView key={j} src={img}>
                          <img
                            src={img}
                            alt={`${p.title} ${j + 1}`}
                            className="w-full object-cover block cursor-zoom-in transition-opacity duration-200 hover:opacity-80"
                            style={{
                              height: p.shots.length > 2 ? 210 : "100%",
                            }}
                          />
                        </PhotoView>
                      ))}
                    </div>

                    {/* Content */}
                    <div className="bg-[#0e0e16] p-14 flex flex-col justify-between max-md:p-8">
                      <div>
                        <div className="font-mono text-[11px] text-gold tracking-widest mb-4">
                          {p.num} — Client Project
                        </div>
                        <h3 className="project-title text-[#EDEAE2] mb-3">
                          {p.title}
                        </h3>
                        <p className="font-mono text-xs text-gold/70 mb-5 tracking-wide">
                          {p.sub}
                        </p>
                        <p className="text-zinc-400 font-light text-[15px] leading-[1.8]">
                          {p.desc}
                        </p>
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-2 mt-8 mb-6">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[11px] text-zinc-600 border border-white/[0.08] px-3 py-1.5"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <span className="font-mono text-[11px] text-zinc-700 tracking-widest uppercase">
                          Private Client Work
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </PhotoProvider>

          {/* ── Public projects grid ── */}
          <div className="mt-20">
            <FadeUp>
              <p className="font-mono text-xs tracking-[0.15em] text-zinc-700 uppercase mb-8">
                — Public Projects
              </p>
            </FadeUp>
            <div
              className="grid grid-cols-2 max-lg:grid-cols-1"
              style={{ gap: "1px", background: "rgba(255,255,255,0.055)" }}
            >
              {PUBLIC_PROJECTS.map((p, i) => (
                <FadeUp key={p.id} delay={i * 0.07}>
                  <div className="project-card-line relative bg-[#09090e] p-9 overflow-hidden hover:bg-[#0e0e16] transition-colors duration-300 max-md:p-6">
                    {/* Thumbnail */}
                    <div className="overflow-hidden mb-6">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full object-cover block transition-transform duration-500 hover:scale-[1.03]"
                        style={{ height: 200 }}
                      />
                    </div>

                    <div className="font-mono text-[11px] text-gold/60 tracking-widest mb-2">
                      {p.num}
                    </div>
                    <h3 className="project-title text-[#EDEAE2] mt-1">
                      {p.title}
                    </h3>
                    <p className="font-mono text-xs text-gold/60 mt-2 mb-4 tracking-wide">
                      {p.sub}
                    </p>
                    <p className="text-zinc-500 font-light text-sm leading-[1.8] mb-6">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-7">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] text-zinc-700 border border-white/[0.07] px-3 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-gold hover:gap-3.5 transition-all duration-200"
                    >
                      Live Preview <ArrowUpRight size={13} />
                    </a>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="sec border-t border-white/[0.055] bg-[#0e0e16]"
      >
        <div className="max-w-[1200px] mx-auto px-12 max-md:px-5">
          <div className="grid grid-cols-2 gap-20 items-start max-lg:grid-cols-1 max-lg:gap-14">
            {/* Left */}
            <div>
              <FadeUp>
                <SectionLabel num="04" text="Contact" />
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="contact-h2 mb-8">
                  Let's
                  <br />
                  <span className="text-gold">Work</span>
                  <br />
                  Together.
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-zinc-400 font-light text-[16px] leading-[1.8] mb-10">
                  Have a project in mind or want to discuss opportunities? I'm
                  always open to interesting projects and collaborations.
                </p>
              </FadeUp>

              <FadeUp delay={0.28}>
                <div className="flex flex-col">
                  {[
                    {
                      icon: <EnvelopeSimple size={17} />,
                      label: "Email",
                      val: "abdikarim.dev01@gmail.com",
                      href: "mailto:abdikarim.dev01@gmail.com",
                    },
                    {
                      icon: <GlobeHemisphereEast size={17} />,
                      label: "Status",
                      val: "Open to interesting projects",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 py-4 border-b border-white/[0.055]"
                    >
                      <div className="w-10 h-10 border border-yellow-700/30 flex items-center justify-center text-gold flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-mono text-[10px] text-zinc-700 uppercase tracking-widest mb-0.5">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-[#EDEAE2] hover:text-gold transition-colors duration-200"
                          >
                            {item.val}
                          </a>
                        ) : (
                          <span className="text-sm text-[#EDEAE2]">
                            {item.val}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>

              {/* Socials */}
              <FadeUp delay={0.36}>
                <div
                  className="flex mt-10"
                  style={{ gap: "1px", background: "rgba(255,255,255,0.055)" }}
                >
                  {[
                    {
                      href: "https://www.linkedin.com/in/abdikarim-dev-b6a94b388/",
                      icon: <LinkedinLogo size={20} />,
                      label: "LinkedIn",
                    },
                    {
                      href: "https://github.com/AbdikarimDev/",
                      icon: <GithubLogo size={20} />,
                      label: "GitHub",
                    },
                    {
                      href: "https://x.com/AbdikarimD31284",
                      icon: <TwitterLogo size={20} />,
                      label: "Twitter",
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex-1 flex items-center justify-center py-4 bg-[#0e0e16] text-zinc-600 hover:bg-yellow-500 hover:text-[#09090e] transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right — form */}
            <FadeUp delay={0.18}>
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="flex flex-col"
                style={{ gap: "1px" }}
              >
                {/* Name + Email row */}
                <div className="grid grid-cols-2" style={{ gap: "1px" }}>
                  {[
                    { name: "from_name", label: "Your Name", type: "text" },
                    {
                      name: "from_email",
                      label: "Email Address",
                      type: "email",
                    },
                  ].map((f) => (
                    <div
                      key={f.name}
                      className="form-field relative bg-[#09090e]"
                    >
                      <input
                        type={f.type}
                        name={f.name}
                        placeholder=" "
                        required
                        className="w-full bg-transparent border-none outline-none pt-8 pb-3.5 px-5 text-[15px] text-[#EDEAE2] font-body"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      />
                      <label className="absolute top-[18px] left-5 font-mono text-[10px] tracking-widest uppercase text-zinc-700 pointer-events-none transition-all duration-200">
                        {f.label}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Subject */}
                <div className="form-field relative bg-[#09090e]">
                  <input
                    type="text"
                    name="subject"
                    placeholder=" "
                    required
                    className="w-full bg-transparent border-none outline-none pt-8 pb-3.5 px-5 text-[15px] text-[#EDEAE2]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                  <label className="absolute top-[18px] left-5 font-mono text-[10px] tracking-widest uppercase text-zinc-700 pointer-events-none transition-all duration-200">
                    Subject
                  </label>
                </div>

                {/* Message */}
                <div className="form-field relative bg-[#09090e]">
                  <textarea
                    name="message"
                    rows={6}
                    placeholder=" "
                    required
                    className="w-full bg-transparent border-none outline-none pt-8 pb-3.5 px-5 text-[15px] text-[#EDEAE2] resize-none"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                  <label className="absolute top-[18px] left-5 font-mono text-[10px] tracking-widest uppercase text-zinc-700 pointer-events-none transition-all duration-200">
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-yellow-500 hover:bg-yellow-400 text-[#09090e] font-display text-xl tracking-[0.1em] border-none cursor-none transition-all duration-200 hover:tracking-[0.15em]"
                >
                  Send Message →
                </button>
              </form>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.055] px-12 py-7 flex justify-between items-center max-md:flex-col max-md:gap-3 max-md:text-center max-md:px-5">
        <p className="font-mono text-xs text-zinc-700">
          © {new Date().getFullYear()}{" "}
          <span className="text-gold">Abdikarim</span>. Built with ❤️ 
        </p>
        <p className="font-mono text-xs text-zinc-700">Frontend Developer</p>
      </footer>
    </div>
  );
}
