"use client";

import { motion } from "motion/react";
import { aboutContent, education, skills } from "../data";
import { SkillIcon } from "./SkillIcon";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:px-14 xl:py-[3.75rem]">
      <motion.div
        className="mx-auto max-w-7xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <motion.h2
          variants={reveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-black text-[#00ffee] sm:text-5xl md:text-6xl xl:text-5xl"
        >
          {aboutContent.title}
        </motion.h2>
        <motion.p
          variants={reveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-3xl text-base font-medium leading-relaxed text-zinc-100 sm:text-lg md:mt-8 md:text-xl lg:max-w-5xl lg:text-2xl xl:text-xl"
        >
          {aboutContent.description}
        </motion.p>

        <motion.h3
          variants={reveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl font-black text-[#00ffee] sm:text-4xl xl:text-3xl xl:mt-10 "
        >
          {aboutContent.skillsTitle}
        </motion.h3>
        <div className="mx-auto mt-10 flex max-w-[3000px] flex-wrap justify-center gap-4 sm:gap-6 xl:gap-x-7 xl:gap-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={reveal}
              transition={{ duration: 0.45, delay: index * 0.015, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="flex h-28 w-[calc(50%-0.5rem)] max-w-40 flex-col items-center justify-center gap-3 rounded-xl bg-[#1a1a1a] px-4 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition-shadow hover:shadow-[0_0_25px_rgba(0,255,238,0.22)] sm:h-[7.25rem] sm:w-40 xl:h-[6.9rem] xl:w-44 xl:max-w-36"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#00FFF0] drop-shadow-[0_0_8px_rgba(0,255,238,0.5)] md:h-11 md:w-11">
                <SkillIcon name={skill.name} className="h-full w-full" strokeWidth={2.4} />
              </div>
              <p className="text-sm font-bold leading-tight text-white md:text-base xl:text-sm">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 text-left md:mt-16 md:grid-cols-3 md:gap-5">
          {education.map((item) => (
            <motion.div
              key={item}
              variants={reveal}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="rounded-lg bg-[#151515] p-5 md:p-6"
            >
              <p className="text-sm font-semibold leading-relaxed text-zinc-200 md:text-base xl:text-sm">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
