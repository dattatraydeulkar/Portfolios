export type IconName =
  | "home"
  | "user"
  | "briefcase"
  | "mail"
  | "fileText"
  | "externalLink"
  | "code2"
  | "layers"
  | "braces"
  | "palette"
  | "repeat"
  | "api"
  | "markup"
  | "github"
  | "workflow"
  | "users"
  | "route"
  | "monitor"
  | "database"
  | "linkedin"
  | "atSign";

export type NavLink = {
  href: string;
  label: string;
  icon: IconName;
};

export type ButtonLink = {
  href: string;
  label: string;
  icon: IconName;
  external?: boolean;
};

export type HeroContent = {
  title: string;
  roles: string[];
  description: string;
  buttons: ButtonLink[];
};

export type AboutContent = {
  title: string;
  description: string;
  skillsTitle: string;
};

export type Skill = {
  name: string;
};

export type Project = {
  title: string;
  type: string;
  stack: string[];
  problem: string;
  process: string;
  outcome: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  details: string;
  year?: string;
  tags?: string[];
  description?: string;
  skills?: string;
  impact?: string;
  badge?: string;
  credentialHref?: string;
  previewHref?: string;
};

export type PortfolioContent = {
  title: string;
  description: string;
  projectButtonLabel: string;
  certificateButtonLabel: string;
  projectsEyebrow: string;
  certificatesEyebrow: string;
  caseLabels: {
    problem: string;
    process: string;
    outcome: string;
  };
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconName;
};

export type ContactContent = {
  title: string;
  description: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitLabel: string;
  submitHref: string;
};

export type CaseLineProps = {
  label: string;
  text: string;
};
