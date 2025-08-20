import { FaJava } from "react-icons/fa";
import {
  SiPostgresql,
  SiWireshark,
  SiGit,
  SiJirasoftware,
  SiSqlite,
  SiNpm,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiDocker,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiGnubash,
  SiHtml5,
  SiOracle,
  SiMysql,
  SiAmazonec2,
} from "react-icons/si";

import type { IconType } from "react-icons";
interface SkillType {
  icon: IconType;
  label: string;
}
export const languages: SkillType[] = [
  { icon: FaJava, label: "Java" },
  { icon: SiJavascript, label: "Javascript" },
  { icon: SiTypescript, label: "Typescript" },
  { icon: SiPython, label: "Python" },
  { icon: SiGnubash, label: "Bash" },
  { icon: SiNodedotjs, label: "NodeJS" },
  { icon: SiPhp, label: "PHP" },
];
export const databases: SkillType[] = [
  { icon: SiOracle, label: "Oracle" },
  { icon: SiPostgresql, label: "Postgresql" },
  { icon: SiMysql, label: "Mysql" },
  { icon: SiSqlite, label: "Sqlite" },
  { icon: SiMongodb, label: "MongoDB" },
];
export const frontEnd: SkillType[] = [
  { icon: SiSass, label: "Sass" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiHtml5, label: "HTML" },
  { icon: SiReact, label: "React" },
  { icon: SiCss3, label: "CSS" },
];
export const tools: SkillType[] = [
  { icon: SiJirasoftware, label: "Jira" },
  { icon: SiWireshark, label: "Wireshark" },
  { icon: SiAmazonec2, label: "AWS" },
  { icon: SiNpm, label: "NPM" },
  { icon: SiGit, label: "Git" },
  { icon: SiDocker, label: "Docker" },
];
