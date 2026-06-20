import type {
  AboutContent,
  Certificate,
  ContactContent,
  HeroContent,
  NavLink,
  PortfolioContent,
  Project,
  Skill,
  SocialLink,
} from "../types";

export const brandName = "Datta.dev";

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home", icon: "home" },
  { href: "#about", label: "About", icon: "user" },
  { href: "#portfolio", label: "Portfolio", icon: "briefcase" },
  { href: "#contact", label: "Contact", icon: "mail" },
];

export const heroContent: HeroContent = {
  title: "Hi, I'm Dattatray Deulkar",
  roles: ["Associate Software Engineer", "Frontend Engineer", "React.js Developer", "Next.js Developer"],
  description:
    "I build responsive, scalable web applications with clean UI, production-ready React components, dynamic routing, API integrations, and CI/CD automation.",
  buttons: [
    {
      href: "/Dattatray-Deulkar-Resume.pdf",
      label: "Resume",
      icon: "fileText",
      external: true,
    },
    {
      href: "#portfolio",
      label: "View Projects",
      icon: "externalLink",
    },
  ],
};

export const aboutContent: AboutContent = {
  title: "About Me",
  description:
    "Results-oriented Associate Software Engineer based in Bengaluru, focused on React.js, Next.js, TypeScript, Tailwind CSS, reusable UI components, API-driven pages, and automated deployment workflows.",
  skillsTitle: "Tech Stack I Use:",
};

export const skills: Skill[] = [
  { name: "React.js" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Tailwind CSS" },
  { name: "Redux" },
  { name: "REST API" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "GitHub" },
  { name: "CI/CD" },
  { name: "Dynamic Routing" },
  { name: "Responsive Design" },
];

export const education: string[] = [
  "B.E. Computer Science - Maratha Mandal Engineering College, Belagavi",
  "Diploma Computer Science - Jain Polytechnic, Khanapur",
  "Class X - Shantiniketan Public School, Khanapur",
];

export const portfolioContent: PortfolioContent = {
  title: "My Portfolio",
  description:
    "Explore my journey through live work, personal projects, certifications, and technical expertise.",
  projectButtonLabel: "Projects",
  certificateButtonLabel: "Certificates",
  projectsEyebrow: "Featured Projects - Case Studies",
  certificatesEyebrow: "Certificates",
  caseLabels: {
    problem: "Problem",
    process: "Process",
    outcome: "Outcome",
  },
};

export const projects: Project[] = [
  {
    title: "Hawkstack Training Platform",
    type: "Live Project",
    stack: ["Next.js", "TypeScript", "Tailwind", "REST API"],
    problem:
      "The platform needed dynamic course pages, vendor-based pages, content updates without code changes.",
    process:
       "Built dynamic routing, reusable UI, API integrations, and CI/CD deployment.",
    outcome:
      "Improved scalability, reduced manual content work, and created a cleaner release process.",
  },
  {
    title: "Hawkstack Consulting Website",
    type: "Live Project",
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind"],
    problem:
      "The site required reliable production pages with consistent UI and source-based form tracking.",
    process:
      "Enhanced pages with reusable React components, centralized submission flow, and responsive layouts.",
    outcome:
      "Boosted maintainability and improved reporting accuracy for incoming leads.",
  },
  {
    title: "Rental House Booking Application",
    type: "Project",
    stack: ["React.js", "TypeScript", "Tailwind CSS"],
    problem:
      "Users needed a simple rental browsing and booking experience with a clean interface.",
    process:
      "Created responsive frontend screens, reusable UI blocks, listing views, and booking-oriented interactions.",
    outcome:
      "Delivered a modern rental app interface focused on usability across devices.",
  },
  {
    title: "Bus Reservation System",
    type: "Project",
    stack: ["HTML", "CSS", "JavaScript", "Django"],
    problem:
      "Manual reservation flows needed a structured web system for browsing and booking buses.",
    process:
      "Built frontend pages with Django-backed flows for reservation management.",
    outcome:
      "Created an organized booking workflow with practical full-stack fundamentals.",
  },
  {
    title: "Rapido Clone",
    type: "Frontend",
    stack: ["HTML", "CSS", "JavaScript"],
    problem:
      "The project explored building a ride-service style landing and interface from scratch.",
    process:
      "Implemented responsive sections, layout styling, and interactive frontend behavior.",
    outcome:
      "Strengthened core HTML, CSS, and JavaScript implementation skills.",
  },
  {
    title: "Wedding Management System",
    type: "Project",
    stack: ["HTML", "CSS", "MySQL"],
    problem:
      "Event information and management needed a simple digital structure.",
    process:
      "Designed frontend pages and database-backed planning records using MySQL.",
    outcome:
      "Built a practical event-management foundation with database awareness.",
  },
];

export const certificates: Certificate[] = [
  {
    title: "AI - Data Quality Analyst",
    issuer: "Rooman",
    year: "2025",
    tags: ["AI", "Data Quality", "Analytics"],
    description:
      "Completed AI data quality analyst training focused on preparing reliable datasets for analytics and intelligent systems.",
    skills:
      "Learned data validation, cleansing, quality checks, and preparation workflows used before AI model development.",
    impact:
      "Able to improve data consistency, accuracy, and usability so AI and analytics outputs become more dependable.",
    badge: "AI Data Quality",
    credentialHref: "https://drive.google.com/file/d/1GwZb9xczqqBcIqMico1aWOWn3LGHJKgQ/view?usp=sharing",
    previewHref: "https://drive.google.com/thumbnail?id=1GwZb9xczqqBcIqMico1aWOWn3LGHJKgQ&sz=w1200",
    details:
      "Completed AI - Data Quality Analyst certification through Rooman.",
  },
  {
    title: "Improving Text with NLP",
    issuer: "IBM CEP",
    year: "2025",
    tags: ["NLP", "Text Analytics", "IBM"],
    description:
      "Covered NLP techniques for improving text analytics quality and extracting better insights from unstructured data.",
    skills:
      "Practiced text preprocessing, NLP fundamentals, analytics readiness, and AI-assisted interpretation of language data.",
    impact:
      "Strengthened ability to work with text-heavy datasets and improve downstream analytics and AI workflows.",
    badge: "Advanced NLP",
    credentialHref: "https://drive.google.com/file/d/1HpSC-uXWWkoCxBrLW_TnBzPeWIMLHxS5/view?usp=sharing",
    previewHref: "https://drive.google.com/thumbnail?id=1HpSC-uXWWkoCxBrLW_TnBzPeWIMLHxS5&sz=w1200",
    details:
      "Participated in Improving Text Analytics Data Quality with Advanced NLP, issued by IBM CEP on April 22, 2025.",
  },
  {
    title: "AI Business Analyst",
    issuer: "IT-ITeS Sector, NASSCOM",
    year: "2025",
    tags: ["AI", "BI", "NASSCOM"],
    description:
      "Earned skill competency certification for the AI Business Intelligence Analyst job role after assessment.",
    skills:
      "Covered AI, business analytics, data intelligence, reporting, and decision-support fundamentals across 570 hours.",
    impact:
      "Ready to support BI workflows, analytics delivery, and AI-assisted business insight generation.",
    badge: "BI Analyst",
    credentialHref: "https://drive.google.com/file/d/1KSq-BE0R2u0jFLXUOEsdKlF1ObJ4sGto/view?usp=sharing",
    previewHref: "https://drive.google.com/thumbnail?id=1KSq-BE0R2u0jFLXUOEsdKlF1ObJ4sGto&sz=w1200",
    details:
      "Completed 570+ hours of training and cleared the AI Business Intelligence Analyst assessment.",
  },
];

export const contactContent: ContactContent = {
  title: "Contact Me",
  description: "Have a project in mind or just want to connect? Reach out to me!",
  namePlaceholder: "Your Name",
  emailPlaceholder: "Your Email",
  messagePlaceholder: "Your Message",
  submitLabel: "Send Message",
  submitHref: "mailto:dattatraydeulkar171@gmail.com",
};

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/dattatray-deulkar", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/dattatraydeulkar", icon: "github" },
  { label: "Email", href: "mailto:dattatraydeulkar171@gmail.com", icon: "atSign" },
];
