import {
  Code2,
  Database,
  Layers,
  MonitorSmartphone,
  Palette,
  Route,
  ServerCog,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactElement, SVGProps } from "react";

type SkillIconProps = {
  name: string;
  className?: string;
  strokeWidth?: number;
};

type IconSvgProps = SVGProps<SVGSVGElement> & {
  strokeWidth?: number;
};

function normalizeSkillName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9+#]/g, "");
}

function TextIcon({
  children,
  className,
  fontSize = 22,
}: IconSvgProps & { children: string; fontSize?: number }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 48 48" fill="none">
      <text
        x="24"
        y="29"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize={fontSize}
        fontWeight="900"
        textAnchor="middle"
      >
        {children}
      </text>
    </svg>
  );
}

const skillIconMap: Record<string, (props: IconSvgProps) => ReactElement> = {
  reactjs: ({ className }) => (
    <svg aria-hidden="true" className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="3.5" fill="currentColor" />
      <ellipse cx="24" cy="24" rx="19" ry="7.5" stroke="currentColor" strokeWidth="2.4" />
      <ellipse cx="24" cy="24" rx="19" ry="7.5" stroke="currentColor" strokeWidth="2.4" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="19" ry="7.5" stroke="currentColor" strokeWidth="2.4" transform="rotate(120 24 24)" />
    </svg>
  ),
  react: ({ className }) => (
    <svg aria-hidden="true" className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="3.5" fill="currentColor" />
      <ellipse cx="24" cy="24" rx="19" ry="7.5" stroke="currentColor" strokeWidth="2.4" />
      <ellipse cx="24" cy="24" rx="19" ry="7.5" stroke="currentColor" strokeWidth="2.4" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="19" ry="7.5" stroke="currentColor" strokeWidth="2.4" transform="rotate(120 24 24)" />
    </svg>
  ),
  javascript: ({ className }) => (
    <svg aria-hidden="true" className={className} viewBox="0 0 48 48" fill="none">
      <path d="M8 8h32v32H8z" fill="currentColor" />
      <text x="24" y="31" fill="#000" fontFamily="Arial, Helvetica, sans-serif" fontSize="16" fontWeight="900" textAnchor="middle">
        JS
      </text>
    </svg>
  ),
  js: ({ className }) => (
    <svg aria-hidden="true" className={className} viewBox="0 0 48 48" fill="none">
      <path d="M8 8h32v32H8z" fill="currentColor" />
      <text x="24" y="31" fill="#000" fontFamily="Arial, Helvetica, sans-serif" fontSize="16" fontWeight="900" textAnchor="middle">
        JS
      </text>
    </svg>
  ),
  html5: ({ className }) => (
    <svg aria-hidden="true" className={className} viewBox="0 0 48 48" fill="currentColor">
      <path d="M10 5h28l-2.6 31.6L24 43l-11.4-6.4L10 5Zm9 12h10.4l-.3 4H19.3l.7 8 4 2.2 4-2.2.3-4.2h-5.6l-.2-3.8h10.2l-.8 10.4L24 35.8l-7.9-4.4-.5-6.3-.7-8.1Z" />
    </svg>
  ),
  html: ({ className }) => (
    <svg aria-hidden="true" className={className} viewBox="0 0 48 48" fill="currentColor">
      <path d="M10 5h28l-2.6 31.6L24 43l-11.4-6.4L10 5Zm9 12h10.4l-.3 4H19.3l.7 8 4 2.2 4-2.2.3-4.2h-5.6l-.2-3.8h10.2l-.8 10.4L24 35.8l-7.9-4.4-.5-6.3-.7-8.1Z" />
    </svg>
  ),
  css3: ({ className }) => (
    <svg aria-hidden="true" className={className} viewBox="0 0 48 48" fill="currentColor">
      <path d="M10 5h28l-2.7 31.5L24 43l-11.3-6.5L10 5Zm8.2 12h12.6l-.3 4H18.6l.3 3.8h11.2l-.8 8.3L24 36.1l-5.3-3-.4-4.4h4l.2 2 1.5.8 1.6-.8.3-2.4h-7.9l-.9-11.3Z" />
    </svg>
  ),
  css: ({ className }) => (
    <svg aria-hidden="true" className={className} viewBox="0 0 48 48" fill="currentColor">
      <path d="M10 5h28l-2.7 31.5L24 43l-11.3-6.5L10 5Zm8.2 12h12.6l-.3 4H18.6l.3 3.8h11.2l-.8 8.3L24 36.1l-5.3-3-.4-4.4h4l.2 2 1.5.8 1.6-.8.3-2.4h-7.9l-.9-11.3Z" />
    </svg>
  ),
  github: ({ className }) => (
    <svg aria-hidden="true" className={className} viewBox="0 0 48 48" fill="currentColor">
      <path d="M24 5.2c-10.6 0-19.2 8.6-19.2 19.2 0 8.5 5.5 15.7 13.2 18.2 1 .2 1.3-.4 1.3-.9v-3.3c-5.4 1.2-6.5-2.3-6.5-2.3-.9-2.2-2.1-2.8-2.1-2.8-1.8-1.2.1-1.2.1-1.2 1.9.1 3 2 3 2 1.7 2.9 4.5 2.1 5.6 1.6.2-1.3.7-2.1 1.2-2.6-4.3-.5-8.8-2.1-8.8-9.5 0-2.1.7-3.8 2-5.2-.2-.5-.9-2.5.2-5.1 0 0 1.6-.5 5.3 2 1.5-.4 3.1-.6 4.8-.6s3.3.2 4.8.6c3.6-2.5 5.3-2 5.3-2 1.1 2.6.4 4.6.2 5.1 1.2 1.4 2 3.1 2 5.2 0 7.4-4.5 9-8.8 9.5.7.6 1.3 1.8 1.3 3.6v5.3c0 .5.4 1.1 1.3.9 7.7-2.6 13.2-9.8 13.2-18.2C43.2 13.8 34.6 5.2 24 5.2Z" />
    </svg>
  ),
  nextjs: lucideSkillIcon(Route),
  next: lucideSkillIcon(Route),
  typescript: lucideSkillIcon(Code2),
  ts: lucideSkillIcon(Code2),
  tailwindcss: lucideSkillIcon(Palette),
  tailwind: lucideSkillIcon(Palette),
  redux: lucideSkillIcon(Layers),
  restapi: lucideSkillIcon(ServerCog),
  api: lucideSkillIcon(ServerCog),
  cicd: lucideSkillIcon(Workflow),
  agile: lucideSkillIcon(Users),
  dynamicrouting: lucideSkillIcon(Route),
  responsivedesign: lucideSkillIcon(MonitorSmartphone),
  django: lucideSkillIcon(Code2),
  mysql: lucideSkillIcon(Database),
  sql: lucideSkillIcon(Database),
  cpp: (props) => (
    <TextIcon {...props} fontSize={19}>
      C++
    </TextIcon>
  ),
  cplusplus: (props) => (
    <TextIcon {...props} fontSize={19}>
      C++
    </TextIcon>
  ),
  java: (props) => (
    <TextIcon {...props} fontSize={18}>
      Java
    </TextIcon>
  ),
  python: (props) => (
    <TextIcon {...props} fontSize={16}>
      Py
    </TextIcon>
  ),
};

function lucideSkillIcon(Icon: LucideIcon) {
  return function LucideSkillIcon({ className, strokeWidth = 2.4 }: IconSvgProps) {
    return <Icon aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
  };
}

export function SkillIcon({ name, className, strokeWidth = 2.4 }: SkillIconProps) {
  const SkillIconComponent = skillIconMap[normalizeSkillName(name)] ?? Code2;

  return (
    <SkillIconComponent
      aria-hidden="true"
      className={className}
      strokeWidth={strokeWidth}
    />
  );
}
