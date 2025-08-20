import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
type props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = () => {
  return (
    <section id="projects">
      <motion.div className="projects">
		</motion.div>
    </section>
  );
};
export default Projects;
