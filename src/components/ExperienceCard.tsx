import { motion, type Variants } from "framer-motion";
type props = {
  start: string;
  end: string;
  title: string;
  duties: string[];
  company: string;
};
const ExperienceCard = ({ start, end, title, duties, company }: props) => {
  const lineVariants: Variants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 16,
      },
    },
  };
  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -20, scale: 1 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12,
      },
    },
  };
  const dotVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 8,
      },
    },
  };
  const parentVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div className="experience-wrapper">
      <motion.div variants={parentVariants}>
        <motion.div
          className="line"
          variants={lineVariants}
          style={{ originY: 1 }}
        ></motion.div>
        <motion.div className="dot" variants={dotVariants}></motion.div>
        <motion.div className="experience" variants={cardVariants}>
          <p className="experience__date">
            {start} - {end}
          </p>
          <h5 className="experience__title">{title}</h5>
          <h6 className="experience__company">{company}</h6>
          <ul className="experience__duties">
            {duties.map((item, index) => {
              return (
                <li key={index} className="experience__duties-item">
                  {item}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default ExperienceCard;
