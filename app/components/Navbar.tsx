"use client";

import { useEffect, useState } from "react";
import { brandName, navLinks } from "../data";
import { Icon } from "./Icon";

export function Navbar() {
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    let frameId = 0;

    const updateActiveLink = () => {
      const scrollPosition = window.scrollY + 140;
      let currentHref = "#home";

      for (const link of navLinks) {
        const section = document.querySelector(link.href);

        if (section instanceof HTMLElement && section.offsetTop <= scrollPosition) {
          currentHref = link.href;
        }
      }

      setActiveHref(currentHref);
    };

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveLink);
    };

    updateActiveLink();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/95 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur">
      <nav className="mx-auto flex min-h-16 max-w-8xl flex-col items-center justify-center gap-2 px-4 py-3 sm:min-h-10 sm:flex-row sm:justify-between sm:px-6 md:px-10 lg:px-14 xl:px-8">
        <a
          href="#home"
          className="font-mono text-xl font-black tracking-normal text-[#00ffee] sm:text-2xl md:text-xl"
        >
          {brandName}
        </a>
        <div className="flex w-full items-center justify-center gap-3 text-sm font-semibold text-zinc-200 sm:w-auto sm:gap-5 sm:text-base md:gap-7 md:text-lg lg:gap-9 lg:text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`flex items-center gap-1.5 border-b-2 py-1 transition hover:border-[#00ffee] hover:text-[#00ffee] md:gap-2 ${
                activeHref === link.href
                  ? "border-[#00ffee] text-[#00ffee]"
                  : "border-transparent"
              }`}
            >
              <Icon name={link.icon} className="h-4 w-4 md:h-5 md:w-5" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
