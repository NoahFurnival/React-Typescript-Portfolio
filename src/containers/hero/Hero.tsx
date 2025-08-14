import { useEffect, useState } from "react";
import { FiZap, FiCpu } from "react-icons/fi";
import { FaRocket, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import EarthScene from "@/components/canvas/EarthScene";
import "./Hero.scss";
import { SelectedPage } from "@/shared/types";
const Waving = () => {
  return (
    <img
      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
      alt="Waving Hand"
      className="wave"
    />
  );
};
const TypeText = ({ texts }: { texts: string[] }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        const currentText = texts[currentIndex];
        if (displayText.length < currentText.length) {
          setDisplayText((prevText: string) =>
            currentText.slice(0, prevText.length + 1),
          );
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(true);
            setDisplayText("");
            setCurrentIndex(
              (prevIndex: number) => (prevIndex + 1) % texts.length,
            );
          }, 2000);
        }
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, isTyping, texts, displayText]);
  return (
    <span className="hero__typed">
      {displayText.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
      {isTyping && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};
type props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const Hero = ({ setSelectedPage }: props) => {
  const typedItems = [
    "Front-end Developer",
    "Back-end Developer",
    "Software Engineer",
    "Computer Technician",
  ];
  return (
    <section id="hero">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Hero)}
        className="hero"
      >
        <div className="hero__bar">
          <div className="hero__bar-circle"></div>
          <div className="hero__bar-line"></div>
        </div>
        <div className="hero__text">
          <h1>
            Hi, I'm <span className="hero__accent">Noah </span>
            <Waving />
          </h1>
          <p className="hero__text-secondary">
            I'm a <TypeText texts={typedItems} />
          </p>
          <p className="hero__text-small">
            <FiZap /> Passionate about crafting clean, efficient code and
            building seamless user experiences.
          </p>
          <br />
          <p className="hero__text-small">
            <FiCpu /> Dedicated to continuous learning and solving complex
            problems with creative solutions.
          </p>
          <br />
          <p className="hero__text-small">
            <FaRocket /> Enthusiastic collaborator who thrives in team
            environments and agile workflows.
          </p>
          <br />
          <div className="hero__socials">
            <a href="https://github.com/NoahFurnival" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/noah-furnival-051710247/"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:noahfurnival@gmail.com" target="_blank">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.div>
      <EarthScene />
    </section>
  );
};
export default Hero;
