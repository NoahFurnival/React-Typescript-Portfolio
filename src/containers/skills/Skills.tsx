import { SelectedPage } from "@/shared/types";
import "./Skills.scss";
import { motion } from "framer-motion";
type props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const technologies = [
  {
    name: "Python",
    sub: "High-Level, Versatile",
    description:
      "Python is a powerful, easy-to-learn programming language used for web development, data analysis, automation, AI, and scientific computing. Its readability and extensive libraries make it highly versatile.",
  },
  {
    name: "CSS",
    sub: "Style Sheet Language",
    description:
      "CSS (Cascading Style Sheets) is used to style and layout web pages, controlling colors, fonts, spacing, and responsive designs to create visually appealing websites.",
  },
  {
    name: "HTML",
    sub: "Markup Language",
    description:
      "HTML (HyperText Markup Language) structures content on the web, defining elements like headings, paragraphs, links, images, and forms.",
  },
  {
    name: "React",
    sub: "JavaScript Library",
    description:
      "React is a popular JavaScript library for building dynamic, component-based user interfaces. It allows for efficient rendering and interactive web applications.",
  },
  {
    name: "TypeScript",
    sub: "Typed JavaScript Superset",
    description:
      "TypeScript is a superset of JavaScript that adds static typing, enabling developers to catch errors early and build large, scalable applications with confidence.",
  },
  {
    name: "JavaScript",
    sub: "Scripting Language",
    description:
      "JavaScript is the core language of the web, used for creating interactive and dynamic web pages, handling events, and building both front-end and back-end applications.",
  },
  {
    name: "Bash",
    sub: "Command-Line Scripting",
    description:
      "Bash is a Unix shell and scripting language used for automating tasks, managing system processes, and writing shell scripts on Linux and macOS systems.",
  },
  {
    name: "SQL",
    sub: "Database Query Language",
    description:
      "SQL (Structured Query Language) is used to manage and manipulate relational databases, allowing for efficient data querying, updating, and organization.",
  },
  {
    name: "Android Studio",
    sub: "Mobile App Development IDE",
    description:
      "Android Studio is the official IDE for developing Android apps, providing tools, emulators, and code assistance for building mobile applications in Java and Kotlin.",
  },
  {
    name: "Lua",
    sub: "Lightweight Scripting Language",
    description:
      "Lua is a lightweight, high-performance scripting language commonly used for game development, embedded systems, and scripting within applications.",
  },
  {
    name: "Tailwind",
    sub: "Utility-First CSS Framework",
    description:
      "Tailwind CSS is a utility-first CSS framework that allows developers to rapidly build custom designs by composing small, reusable classes directly in HTML or JSX.",
  },
  {
    name: "Sass",
    sub: "CSS Preprocessor",
    description:
      "Sass (Syntactically Awesome Stylesheets) is a CSS preprocessor that adds variables, nesting, and reusable mixins, making CSS more maintainable and efficient for large projects.",
  },
  {
    name: "PHP",
    sub: "Server-Side Scripting",
    description:
      "PHP is a widely-used server-side scripting language designed for web development. It powers dynamic websites and web applications, enabling interaction with databases and server-side logic.",
  },
];
const Skills = ({ setSelectedPage }: props) => {
  return (
    <section id="skills">
      <motion.div
        className="skills"
        onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
      >
        <div className="skills__title"></div>
      </motion.div>
    </section>
  );
};
export default Skills;
