import "@/App.scss";
import Projects from "./containers/projects/Projects";
import Skills from "@/containers/skills/Skills";
import School from "@/containers/school/School";
import Experience from "@/containers/experience/Experience";
import Contact from "@/containers/contact/Contact";
import Navbar from "@/containers/navbar/Navbar";
import Hero from "@/containers/hero/Hero";
import { useState, useEffect } from "react";
import { SelectedPage } from "@/shared/types";
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Hero,
  );
  const [isTop, setIsTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
        setSelectedPage(SelectedPage.Hero);
      }
      if (window.scrollY !== 0) setIsTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTop={isTop}
      />
      <Hero setSelectedPage={setSelectedPage}  />
      <Skills setSelectedPage={setSelectedPage}/>
      <School  />
      <Experience />
      <Projects setSelectedPage={setSelectedPage}/>
      <Contact />
    </div>
  );
}

export default App;
