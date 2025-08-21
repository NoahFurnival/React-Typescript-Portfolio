import { motion, type Variants, useInView } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useRef, useEffect } from "react";
import "./Background.scss";
import { headerVariant, subHeaderVariant } from "@/shared/headerAnimations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import EducationCard from "@/components/EducationCard";
import ExperienceCard from "@/components/ExperienceCard";
import { experience } from "@/shared/experienceConstants";
import { education } from "@/shared/educationConstants";
import { SelectedPage } from "@/shared/types";

import "swiper/css";
import "swiper/css/pagination";

type props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const Background = ({ setSelectedPage }: props) => {
  const isAboveMediumScreens = useMediaQuery("(max-width: 768px");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isInViewMulti = useInView(sectionRef, { amount: 0.5 });
  useEffect(() => {
    if (isInViewMulti) {
      setSelectedPage(SelectedPage.Background);
    }
  }, [setSelectedPage, isInViewMulti]);
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        staggerDirection: -1,
      },
    },
  };
  return (
    <section id="background" ref={sectionRef}>
      <motion.div className="background">
        <div className="background__title">
          <motion.h4
            variants={subHeaderVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Professional History
          </motion.h4>
          <motion.h3
            variants={headerVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Background
          </motion.h3>
        </div>
        <div className="background__main">
          {isAboveMediumScreens && <div className="swiper-pagination-top" />}
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{
              el: ".swiper-pagination-top",
              clickable: true,
              renderBullet: (index, className) => {
                const labels = ["Education", "Experience"];
                return `<button class="${className} background__tab">${labels[index]}</button>`;
              },
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                allowTouchMove: false,
                spaceBetween: 1,
                pagination: {
                  el: ".swiper-pagination-top", // target the container above
                  clickable: true,
                  renderBullet: (index, className) => {
                    const labels = ["Education", "Experience"];
                    return `<button class="${className} background__tab">${labels[index]}</button>`;
                  },
                },
              },
            }}
          >
            <SwiperSlide>
              <motion.div className="background__education">
                {!isAboveMediumScreens && <h5> Education </h5>}
                <motion.div
                  className="background__education-inner"
                  initial="hidden"
                  variants={variants}
                  animate={isInView ? "visible" : "hidden"}
                >
                  {education.map((item) => {
                    return (
                      <EducationCard
                        start={item.start}
                        end={item.end}
                        certificate={item.certificate}
                        key={item.school}
                        school={item.school}
                        description={item.description}
                      />
                    );
                  })}
                </motion.div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div className="background__experience">
                {!isAboveMediumScreens && <h5> Experience </h5>}
                <motion.div
                  className="background__experience-inner"
                  initial="hidden"
                  variants={variants}
                  animate={isInView ? "visible" : "hidden"}
                >
                  {experience.map((item) => {
                    return (
                      <ExperienceCard
                        start={item.start}
                        end={item.end}
                        title={item.title}
                        key={item.title}
                        duties={item.duties}
                        company={item.company}
                      />
                    );
                  })}
                </motion.div>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};
export default Background;
