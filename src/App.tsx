import "@/App.scss";
import Projects from "./containers/projects/Projects";
import Skills from "@/containers/skills/Skills";
import Background from "@/containers/background/Background";
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
      <Hero isTop={isTop} />
      <Skills />
      <Background />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
