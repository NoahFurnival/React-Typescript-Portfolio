import { motion } from "framer-motion";
import type { IconType } from "react-icons";
type skillCardProps = {
  icon: IconType;
  label: string;
};

const SkillCard = ({ icon: Icon, label }: skillCardProps) => {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, scaleY: 0.9, y: 8, transformOrigin: "top" },
        show: {
          opacity: 1,
          scaleY: 1,
          y: 0,
          transition: { type: "spring", stiffness: 380, damping: 30 },
        },
      }}
      whileHover={{ scale: 1.05 }}
      className="skillCard"
    >
      <Icon size={40} />
      <span>{label}</span>
    </motion.li>
  );
};
export default SkillCard;
