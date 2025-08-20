import { motion } from "framer-motion";

export type Project = {
  picture: string;
  title: string;
  description: string;
};

type Props = Project;

const ProjectCard = ({ picture, title, description }: Props) => {
  return (
    <motion.article
      className="project"
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="project__pic">
        <img src={picture} alt={title} loading="lazy" />
      </div>
      <div className="project__body">
        <h3 className="project__title">{title}</h3>
        <p className="project__desc">{description}</p>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
