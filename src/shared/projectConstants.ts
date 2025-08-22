import { type Project } from "@/components/ProjectCard";
import blog from "@/assets/blog.png";
import vl from "@/assets/vl.png";
import chatbot from "@/assets/chatbot.png";
export const projects: Project[] = [
  {
    picture: vl,
    title: "VisionLeads Website",
    softwares: ["Tailwindcss", "Javascript"],
    description:
      "A clean, single-page portfolio site built to showcase Vision Leads’ services. The site includes a clear call-to-action encouraging visitors to request a free ICP (Ideal Customer Profile) assessment, connected through a webhook for seamless lead capture.",
    link: "https://visionleads.io/",
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
      "Developed a full-stack blogging platform with my team using PHP, JavaScript, and CSS. The site includes user account creation and authentication (sign-up/sign-in), along with core blog functionality to create, view, and delete posts. Built with a focus on usability and clean design.",
    link: "https://github.com/DevChloee/Team_Project_Making-BLog_PHP#",
    github: true,
  },
];
