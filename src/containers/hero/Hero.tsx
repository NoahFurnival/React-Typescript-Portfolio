import cropped from "@/assets/cropped.JPG";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./Hero.scss";
import TypeWriter from "@/components/TypeWriter";
const Waving = () => {
  return (
    <img
      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
      alt="Waving Hand"
      className="wave"
    />
  );
};
type props = {
  isTop: boolean;
};
const Hero = ({ isTop }: props) => {
  const typedItems = [
    "Front-end Developer",
    "Back-end Developer",
    "Software Engineer",
    "IT Technician",
  ];
  return (
    <section id="home">
      <motion.div className="hero">
        <div className="hero__header">
          <h1>
            Hi, I'm <span>Noah</span> <Waving />
          </h1>
          <h2>
            <TypeWriter texts={typedItems} />
          </h2>
          <p>
            Crafting seamless digital experiences from front-end to back-end, I
            merge design, engineering, and problem solving to build software
            that’s beautiful and high-performing. From coding and
            troubleshooting to architecting solutions, I turn ideas into
            reality.
          </p>
          <div className="hero__icons">
            <a
              href="https://www.linkedin.com/in/noah-furnival-051710247/"
              target="_blank"
            >
              <FiLinkedin />
            </a>
            <a href="https://github.com/NoahFurnival" target="_blank">
              <FiGithub />
            </a>
            <a href="mailto:noahfurnival@gmail.com">
              <FiMail />
            </a>
          </div>
          <div className="hero__button">
            <motion.a
              href="#contact"
              className="hero__contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              Contact Me <span> {">"} </span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="hero__resume"
              href="@/assets/resume.pdf"
              download
            >
              Download Resume <FaDownload size={24} />
            </motion.a>
          </div>
        </div>
        <div className="hero__image">
          <img src={cropped} alt="test"></img>
        </div>
        <AnimatePresence>
          {isTop && (
            <motion.div
              className="hero__scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.1, ease: "easeOut" },
              }}
            >
              <motion.div
                className="hero__scroll-inner"
                animate={{ y: ["0%", "150%", "0%"] }}
                transition={{
                  delay: 1.25,
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
export default Hero;
