import { motion, useInView } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import { subHeaderVariant, headerVariant } from "@/shared/headerAnimations";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Keyboard,
  A11y,
} from "swiper/modules";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/shared/projectConstants";

import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";
import "./Projects.scss";

type props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: props) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  return (
    <section id="projects" ref={sectionRef}>
      <motion.div
        className="projects"
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        <div className="projects__title">
          <motion.h4
            variants={subHeaderVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            What I've Done
          </motion.h4>
          <motion.h3
            variants={headerVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Projects
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="projects__main"
        >
          <Swiper
            modules={[EffectCoverflow, Pagination, Keyboard, A11y, Autoplay]}
            className="projects__swiper"
            effect="coverflow"
            grabCursor={true}
            keyboard={{ enabled: true }}
            pagination={{ clickable: true }}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={20}
            autoplay={{ delay: 2500 }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 70,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((item, idx) => (
              <SwiperSlide key={`${item.title}-${idx}`}>
                <ProjectCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
