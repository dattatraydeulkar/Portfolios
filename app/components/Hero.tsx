"use client";

import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import { heroContent } from "../data";
import { Icon } from "./Icon";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-24 items-center justify-center px-4 pt-28 text-center sm:px-6 md:px-10 lg:px-14 xl:px-20"
    >
      <motion.div
        className="mx-auto w-full max-w-3xl md:max-w-4xl lg:max-w-5xl"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl"
        >
          {heroContent.title}
        </motion.h1>
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-5 min-h-[2.5rem] text-2xl font-black text-[#00ffee] sm:min-h-[3rem] sm:text-3xl md:min-h-[3.5rem] md:text-4xl lg:min-h-[4rem] lg:text-5xl xl:min-h-[3.5rem] xl:text-4xl"
        >
          <Typewriter
            words={heroContent.roles}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={45}
            delaySpeed={1400}
          />
        </motion.h2>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-zinc-100 sm:text-lg md:max-w-3xl md:text-xl lg:text-2xl xl:text-xl"
        >
          {heroContent.description}
        </motion.p>
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-10 md:gap-5"
        >
          {heroContent.buttons.map((button) => (
            <motion.a
              key={button.href}
              href={button.href}
              target={button.external ? "_blank" : undefined}
              rel={button.external ? "noreferrer" : undefined}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex w-full max-w-[14.25rem] items-center justify-center gap-2 rounded-md bg-[#00ffee] px-1 py-4 text-center text-base font-black text-black transition-shadow hover:shadow-[0_0_30px_rgba(0,255,238,0.35)] md:text-lg"
            >
              <Icon name={button.icon} className="h-5 w-5" strokeWidth={2.4} />
              {button.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

