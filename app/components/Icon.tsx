import {
  AtSign,
  Braces,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  FileText,
  GitBranch,
  Home,
  Layers,
  Link,
  Mail,
  MonitorSmartphone,
  Palette,
  Repeat2,
  Route,
  ServerCog,
  Tags,
  User,
  Users,
  Workflow,
} from "lucide-react";
import type { IconName } from "../types";

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

const iconMap = {
  home: Home,
  user: User,
  briefcase: BriefcaseBusiness,
  mail: Mail,
  fileText: FileText,
  externalLink: ExternalLink,
  code2: Code2,
  layers: Layers,
  braces: Braces,
  palette: Palette,
  repeat: Repeat2,
  api: ServerCog,
  markup: Tags,
  github: GitBranch,
  workflow: Workflow,
  users: Users,
  route: Route,
  monitor: MonitorSmartphone,
  database: Database,
  linkedin: Link,
  atSign: AtSign,
} satisfies Record<IconName, typeof Home>;

export function Icon({ name, className, strokeWidth = 2 }: IconProps) {
  const LucideIcon = iconMap[name];

  return (
    <LucideIcon
      aria-hidden="true"
      className={className}
      strokeWidth={strokeWidth}
    />
  );
}
