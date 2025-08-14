import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
type props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: props) => {
  return (
    <section id="projects">
      <motion.div
        className="projects"
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}>
		<div className="projects__wrapper"> 
		
		</div>
		</motion.div>
    </section>
  );
};
export default Projects;
