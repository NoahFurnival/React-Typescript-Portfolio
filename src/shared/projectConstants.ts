import { type Project } from "@/components/ProjectCard";
import proj1 from "@/assets/proj1.png";
import proj2 from "@/assets/proj2.png";
import proj3 from "@/assets/proj3.png";
import proj4 from "@/assets/proj4.png";
export const projects: Project[] = [
  {
    picture: proj1,
    title: "Smart Support Bot",
    description: "LLM-powered support assistant with real-time retrieval.",
  },
  {
    picture: proj2,
    title: "Fitness Tracker",
    description: "PWA with offline sync, charts, and wearable imports.",
  },
  {
    picture: proj3,
    title: "Portfolio Engine",
    description: "Headless CMS + Next.js with image CDN and MDX blog.",
  },
  {
    picture: proj4,
    title: "Task Planner",
    description: "Kanban board with CRDT-based real-time collaboration.",
  },
];
