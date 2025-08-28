import { motion } from "framer-motion";
import { FiGithub, FiGlobe } from "react-icons/fi";
export type Project = {
  picture: string;
  title: string;
  description: string;
  softwares: string[];
  link: string;
  github: boolean;
};

type Props = Project;

const ProjectCard = ({
  picture,
  title,
  description,
  softwares,
  link,
  github,
}: Props) => {
  return (
    <motion.div className="project">
      <div className="project__pic">
        <img src={picture} alt={title} loading="lazy" />
        <div className="project__link">
          {github ? (
            <a href={link} target="_blank">
              <FiGithub />
            </a>
          ) : (
            <a href={link} target="_blank">
              <FiGlobe />
            </a>
          )}
        </div>
      </div>
      <div className="project__body">
        <h3 className="project__title">{title}</h3>
        <p className="project__desc">{description}</p>
      </div>
      <div className="project__footer">
        <div className="project__softwares">
          {softwares.map((item, i) => {
            return <span key={i}>#{item}</span>;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
