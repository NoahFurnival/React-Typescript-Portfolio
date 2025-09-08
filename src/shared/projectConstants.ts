import { type Project } from "@/components/ProjectCard";
import blog from "@/assets/blog.png";
import vl from "@/assets/vl.png";
import ilisten from "@/assets/ilisten.png";
import chatbot from "@/assets/chatbot.png";
export const projects: Project[] = [
  {
    picture: vl,
    title: "VisionLeads Website",
    softwares: ["Tailwindcss", "Typescript", "react"],
    description:
      "A clean website built in react and tailwind that show cases VisionLeads services. The site includes a clear call-to-action encouraging visitors to request a free ICP (Ideal Customer Persona) assessment.",
    link: "https://visionleads.io/",
    github: false,
  },
  {
    picture: ilisten,
    title: "iListen Website",
    softwares: ["Wordpress"],
    description:
      "iListen Canada is a friendly, mobile-first website designed to make booking a listening session feel simple, not stressful. The homepage guides you with clear calls to action and a streamlined “Book Now” path that works just as well on a phone as on a laptop.",
    link: "https://ilistencanada.com",
    github: false,
  },
  {
    picture: chatbot,
    title: "Telegram Bot",
    softwares: ["Telegram", "N8N", "Javascript"],
    description:
      "Built an AI-powered Telegram bot integrated with n8n and custom nodes. The bot generates LinkedIn-ready posts based on user input in Telegram, then asks for user confirmation, then automatically publishes them to LinkedIn.",
    link: "https://visionleads.io/",
    github: false,
  },
  {
    picture: blog,
    title: "Blog Website",
    softwares: ["PHP", "Javascript", "CSS"],
    description:
      "Developed a full-stack blogging platform with my team using PHP, JavaScript, and CSS. The site includes user account creation and authentication (sign-up/sign-in), along with core blog functionality to create, view, and delete posts.",
    link: "https://github.com/DevChloee/Team_Project_Making-BLog_PHP#",
    github: true,
  },
];
