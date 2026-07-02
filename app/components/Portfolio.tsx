"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { certificates, portfolioContent, projects } from "../data";
import type { CaseLineProps, Certificate, Project } from "../types";
import { Icon } from "./Icon";

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const accents = [
  {
    top: "from-emerald-300 via-cyan-300 to-blue-400",
    label: "text-emerald-300",
    badge: "border-emerald-300/35 bg-emerald-300/10 text-emerald-200",
  },
  {
    top: "from-blue-400 via-violet-400 to-fuchsia-400",
    label: "text-blue-300",
    badge: "border-blue-300/35 bg-blue-300/10 text-blue-200",
  },
  {
    top: "from-fuchsia-400 via-rose-400 to-amber-300",
    label: "text-pink-300",
    badge: "border-pink-300/35 bg-pink-300/10 text-pink-200",
  },
];

type ActivePanel = "projects" | "certificates";

export function Portfolio() {
  const [activePanel, setActivePanel] = useState<ActivePanel>("projects");

  const handlePanelChange = (panel: ActivePanel) => {
    setActivePanel(panel);
    window.history.replaceState(null, "", panel === "projects" ? "#projects" : "#certificates");
  };

  return (
    <section id="portfolio" className="scroll-mt-24 bg-[#101010] px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:px-14 xl:px-20">
      <motion.div
        className="mx-auto max-w-7xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <motion.h2
          variants={reveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-black text-[#00ffee] sm:text-5xl md:text-6xl"
        >
          {portfolioContent.title}
        </motion.h2>
        <motion.p
          variants={reveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-5xl text-base font-medium leading-relaxed text-zinc-100 sm:text-lg md:mt-7 md:text-xl"
        >
          {portfolioContent.description}
        </motion.p>

        <motion.div
          variants={reveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:mt-10 md:gap-6"
        >
          <PanelButton
            active={activePanel === "projects"}
            onClick={() => handlePanelChange("projects")}
          >
            {portfolioContent.projectButtonLabel}
          </PanelButton>
          <PanelButton
            active={activePanel === "certificates"}
            onClick={() => handlePanelChange("certificates")}
          >
            {portfolioContent.certificateButtonLabel}
          </PanelButton>
        </motion.div>

        {activePanel === "projects" ? (
          <ProjectPanel />
        ) : (
          <CertificatePanel />
        )}
      </motion.div>
    </section>
  );
}

function PanelButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`rounded-lg border-2 border-[#00ffee] px-7 py-3 text-base font-bold transition-colors md:px-8 md:py-4 md:text-lg ${
        active
          ? "bg-[#00ffee] text-black"
          : "text-[#00ffee] hover:bg-[#00ffee] hover:text-black"
      }`}
    >
      {children}
    </motion.button>
  );
}

function ProjectPanel() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <motion.div
      id="projects"
      initial="hidden"
      animate="visible"
      variants={reveal}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mt-12 scroll-mt-28 sm:mt-14 md:mt-16"
    >
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500 sm:text-sm md:tracking-[0.35em]">
        {portfolioContent.projectsEyebrow}
      </p>

      <div className="mx-auto mt-8 grid max-w-[94rem] overflow-hidden rounded-2xl border border-white/10 bg-[#121316] text-left shadow-[0_18px_50px_rgba(0,0,0,0.28)] lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = accents[index % accents.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
      className="group relative flex min-h-[35.75rem] flex-col border-white/10 bg-[#121316] transition-colors duration-300 hover:bg-[#161a1d] lg:border-r lg:last:border-r-0"
    >
      <div className={`h-1 bg-gradient-to-r ${accent.top}`} />

      <div className="flex flex-1 flex-col px-6 py-7 text-center sm:px-7 lg:px-6">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-zinc-600">
          {String(index + 1).padStart(2, "0")} / {project.type}
        </p>
        <h3 className="mt-3 text-2xl font-black text-white">
          {project.title}
        </h3>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 md:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-5">
          <CaseLine accentClass={accent.label} label={portfolioContent.caseLabels.problem} text={project.problem} />
          <CaseLine accentClass={accent.label} label={portfolioContent.caseLabels.process} text={project.process} />
          <CaseLine accentClass={accent.label} label={portfolioContent.caseLabels.outcome} text={project.outcome} />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-white/10 px-6 py-3 sm:px-7 lg:px-8">
        <span className={`rounded-full border px-3 py-1 text-sm font-medium ${accent.badge}`}>
          {project.stack[0]}
        </span>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-black text-white transition-colors hover:border-[#00ffee] hover:text-[#00ffee]"
        >
          View project
          <Icon name="externalLink" className="h-4 w-4" strokeWidth={2.4} />
        </a>
      </div>
    </motion.article>
  );
}

function CertificatePanel() {
  return (
    <motion.div
      id="certificates"
      initial="hidden"
      animate="visible"
      variants={reveal}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mt-12 scroll-mt-28 sm:mt-14 md:mt-16"
    >
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500 sm:text-sm md:tracking-[0.35em]">
        {portfolioContent.certificatesEyebrow}
      </p>

      <div className="mx-auto mt-8 grid max-w-[84rem] overflow-hidden rounded-2xl border border-white/10 bg-[#121316] text-left shadow-[0_18px_50px_rgba(0,0,0,0.28)] lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.title}
            certificate={certificate}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

function CertificateCard({ certificate, index }: { certificate: Certificate; index: number }) {
  const accent = accents[index % accents.length];
  const previewSource = certificate.previewHref;
  const isPdfPreview = /\.pdf$/i.test(certificate.previewHref ?? "");
  const isImagePreview =
    /\.(png|jpe?g|webp|gif|svg)$/i.test(certificate.previewHref ?? "") ||
    certificate.previewHref?.startsWith("https://drive.google.com/thumbnail");

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
      className="flex min-h-[41rem] flex-col border-white/10 bg-[#121316] transition-colors duration-300 hover:bg-[#161a1d] lg:border-r lg:last:border-r-0"
    >
      <div className={`h-1 bg-gradient-to-r ${accent.top}`} />
      <div className="flex flex-1 flex-col px-6 py-7 text-center sm:px-7 lg:px-8">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-zinc-600">
          {String(index + 1).padStart(2, "0")} / {certificate.issuer}
          {certificate.year ? ` - ${certificate.year}` : ""}
        </p>
        <h3 className="mt-3 text-2xl font-black text-white">
          {certificate.title}
        </h3>

        <div className="mt-5 overflow-hidden rounded-lg border border-white/15 bg-white">
          {previewSource && isImagePreview ? (
            <Image
              src={previewSource}
              alt={`${certificate.title} certificate preview`}
              width={980}
              height={520}
              className="h-44 w-full object-cover object-top"
            />
          ) : previewSource && isPdfPreview ? (
            <iframe
              src={`${previewSource}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title={`${certificate.title} certificate preview`}
              scrolling="no"
              className="pointer-events-none h-[calc(11rem+24px)] w-[calc(100%+24px)] overflow-hidden bg-white"
            />
          ) : (
            <div className="flex h-44 flex-col items-center justify-center bg-zinc-100 px-5 text-center text-sm font-bold text-zinc-700">
              <span>{certificate.title}</span>
              <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Screenshot
              </span>
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {(certificate.tags ?? []).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 md:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-5">
          <CaseLine accentClass={accent.label} label="Description" text={certificate.description ?? certificate.details} />
          <CaseLine accentClass={accent.label} label="Skills" text={certificate.skills ?? certificate.details} />
          <CaseLine accentClass={accent.label} label="Impact" text={certificate.impact ?? certificate.details} />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-white/10 px-6 py-5 sm:px-7 lg:px-8">
        <span className={`rounded-full border px-3 py-1 text-sm font-medium ${accent.badge}`}>
          {certificate.badge ?? certificate.tags?.[0] ?? "Credential"}
        </span>
        <a
          href={certificate.credentialHref ?? "#certificates"}
          target={certificate.credentialHref ? "_blank" : undefined}
          rel={certificate.credentialHref ? "noreferrer" : undefined}
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-black text-white transition-colors hover:border-[#00ffee] hover:text-[#00ffee]"
        >
          View credential
          <Icon name="externalLink" className="h-4 w-4" strokeWidth={2.4} />
        </a>
      </div>
    </motion.article>
  );
}

function CaseLine({
  accentClass,
  label,
  text,
}: CaseLineProps & { accentClass: string }) {
  return (
    <div className="grid gap-2 md:grid-cols-[90px_1fr] md:gap-4">
      <p className={`font-mono text-[0.68rem] font-black uppercase tracking-[0.18em] ${accentClass}`}>
        {label}
      </p>
      <p className="text-sm leading-relaxed text-zinc-400 md:text-base">{text}</p>
    </div>
  );
}
