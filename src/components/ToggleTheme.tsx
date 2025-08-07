import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";
import yny from "@/assets/yny.png";
import "./ToggleTheme.scss";
export default function ToggleTheme() {
  const { toggleTheme } = useTheme();
  const [isClicked, setClicked] = useState<boolean>(false);
  function click() {
    toggleTheme();
    setClicked(!isClicked);
  }
  return (
    <div className="toggle-theme">
      <button onClick={click} className={`${isClicked ? "clicked" : ""}`}>
        <img className="yny-image" src={yny} alt="Yin and Yang" />
      </button>
    </div>
  );
}
