"use client";

import { motion } from "motion/react";
import { contactContent, socialLinks } from "../data";
import { Icon } from "./Icon";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen scroll-mt-24 items-center px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:px-14 xl:px-20"
    >
      <motion.div
        className="mx-auto w-full max-w-xl text-center md:max-w-2xl lg:max-w-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <motion.h2
          variants={reveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-black text-[#00ffee] sm:text-5xl md:text-6xl"
        >
          {contactContent.title}
        </motion.h2>
        <motion.p
          variants={reveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-6 text-base font-medium text-zinc-100 sm:text-lg md:mt-7 md:text-xl"
        >
          {contactContent.description}
        </motion.p>

        <motion.form
          variants={reveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-8 grid gap-4 md:mt-10 md:gap-5"
        >
          <input
            aria-label={contactContent.namePlaceholder}
            placeholder={contactContent.namePlaceholder}
            className="rounded-lg bg-[#1f1f1f] px-4 py-4 text-base text-white outline-none transition placeholder:text-zinc-500 focus:ring-2 focus:ring-[#00ffee] md:px-5 md:py-5 md:text-xl"
          />
          <input
            aria-label={contactContent.emailPlaceholder}
            type="email"
            placeholder={contactContent.emailPlaceholder}
            className="rounded-lg bg-[#1f1f1f] px-4 py-4 text-base text-white outline-none transition placeholder:text-zinc-500 focus:ring-2 focus:ring-[#00ffee] md:px-5 md:py-5 md:text-xl"
          />
          <textarea
            aria-label={contactContent.messagePlaceholder}
            placeholder={contactContent.messagePlaceholder}
            rows={5}
            className="resize-y rounded-lg bg-[#1f1f1f] px-4 py-4 text-base text-white outline-none transition placeholder:text-zinc-500 focus:ring-2 focus:ring-[#00ffee] md:px-5 md:py-5 md:text-xl"
          />
          <motion.a
            href={contactContent.submitHref}
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#00ffee] px-6 py-4 text-center font-black text-black transition-shadow hover:shadow-[0_0_30px_rgba(0,255,238,0.35)] md:py-5"
          >
            <Icon name="mail" className="h-5 w-5" strokeWidth={2.4} />
            {contactContent.submitLabel}
          </motion.a>
        </motion.form>

        <motion.div
          variants={reveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10 flex justify-center gap-6 md:mt-12 md:gap-10"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-[#00ffee] text-[#00ffee] transition-colors hover:bg-[#00ffee] hover:text-black md:h-11 md:w-11"
              aria-label={social.label}
            >
              <Icon name={social.icon} className="h-5 w-5" strokeWidth={2.4} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
