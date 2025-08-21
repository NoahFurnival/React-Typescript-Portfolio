import { motion, type Variants } from "framer-motion";
type props = {
  start: string;
  end: string;
  school: string;
  certificate: string;
  description: string;
};
const EducationCard = ({
  start,
  end,
  school,
  description,
  certificate,
}: props) => {
  const lineVariants: Variants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        ease: "easeOut",
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
    }
  };
  const parentVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="education-wrapper">
      <motion.div variants={parentVariants}>
        <motion.div
          className="line"
          variants={lineVariants}
          style={{ originY: 1 }}
        ></motion.div>
        <motion.div className="dot" variants={dotVariants}></motion.div>
        <motion.div className="education" variants={cardVariants}>
          <p className="education__date">
            {start} - {end}
          </p>
          <h5 className="education__cert"> {certificate}</h5>
          <h6 className="education__school"> {school}</h6>
          <p className="education__desc">{description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default EducationCard;
