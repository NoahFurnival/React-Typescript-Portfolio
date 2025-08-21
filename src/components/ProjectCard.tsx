import { motion } from "framer-motion";

export type Project = {
  picture: string;
  title: string;
  description: string;
};

type Props = Project;

const ProjectCard = ({ picture, title, description }: Props) => {
  return (
    <motion.div className="project">
      <div className="project__pic">
        <img src={picture} alt={title} loading="lazy" />
      </div>
      <h3 className="project__title">{title}</h3>
      <p className="project__desc">{description}</p>
    </motion.div>
  );
};

export default ProjectCard;
