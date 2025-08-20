import { SelectedPage } from "@/shared/types";
import "./Skills.scss";
import { headerVariant, subHeaderVariant } from "@/shared/headerAnimations";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import { tools, languages, databases, frontEnd } from "@/shared/skillConstants";


type props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const Skills = ({ setSelectedPage }: props) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isInViewMulti = useInView(sectionRef, { amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  useEffect(() => {
    if (isInViewMulti) {
      setSelectedPage(SelectedPage.Skills);
    }
  }, [setSelectedPage, isInViewMulti]);
  return (
    <section id="skills" ref={sectionRef}>
      <motion.div className="skills">
        <div className="skills__title">
          <motion.h4
            variants={subHeaderVariant}
            initial="hidden"
            animate={controls}
          >
            What I've Learned
          </motion.h4>
          <motion.h3
            variants={headerVariant}
            initial="hidden"
            animate={controls}
          >
            Skills
          </motion.h3>
        </div>
        <div className="skills__main">
          <div className="skills__main-languages">
            <h5> Languages </h5>
            <motion.ul
              className="skills__main-languages-inner"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {languages.map((item) => {
                return (
                  <SkillCard
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                  />
                );
              })}
            </motion.ul>
          </div>
          <div className="skills__main-tools">
            <h5> Tools </h5>
            <motion.ul
              className="skills__main-tools-inner"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {tools.map((item) => {
                return (
                  <SkillCard
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                  />
                );
              })}
            </motion.ul>
          </div>
          <div className="skills__main-front">
            <h5> Front-end Development </h5>
            <motion.ul
              className="skills__main-front-inner"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {frontEnd.map((item) => {
                return (
                  <SkillCard
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                  />
                );
              })}
            </motion.ul>
          </div>
          <div className="skills__main-database">
            <h5>Databases</h5>
            <motion.ul
              className="skills__main-database-inner"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {databases.map((item) => {
                return (
                  <SkillCard
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                  />
                );
              })}
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Skills;
