import { useState } from "react";
import "@/containers/navbar/Navbar.scss";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "@/components/Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  selectedPage: SelectedPage;
  isTop: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, isTop, setSelectedPage }: Props) => {
  const [menuToggled, setMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");
  const mobileOnClick = (curPage: SelectedPage) => {
    setSelectedPage(curPage);
    setMenuToggled(false);
  };

  return (
    <nav>
      <div className={`navbar${isTop ? " navbar__top" : ""}`}>
        <div className="navbar__wrapper">
          <div className="navbar__inner">
            <div className="navbar__image">
              <AnchorLink
                href="#home"
                onClick={() => setSelectedPage(SelectedPage.Hero)}
              >
                <span>{"<"}</span>
                <span className="navbar__name">Noah Furnival</span>
                <span>{"/>"}</span>
              </AnchorLink>
            </div>
            {isAboveMediumScreens ? (
              <div className="navbar__desktop">
                <div className="navbar__item">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="navbar__item">
                  <Link
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="navbar__item">
                  <Link
                    page="Background"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="navbar__item">
                  <Link
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="navbar__item">
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </div>
            ) : (
              <div className="navbar__mobile">
                {!isAboveMediumScreens && menuToggled ? (
                  <div className="navbar__mobile-active">
                    <div className="navbar__mobile-header">
                      <button
                        className="navbar__mobile-x"
                        onClick={() => setMenuToggled(false)}
                      >
                        <XMarkIcon />
                      </button>
                    </div>
                    <div className="navbar__mobile-items">
                      <div className="navbar__item">
                        <Link
                          page="Home"
                          selectedPage={selectedPage}
                          setSelectedPage={() => mobileOnClick(selectedPage)}
                        />
                      </div>
                      <div className="navbar__item">
                        <Link
                          page="Skills"
                          selectedPage={selectedPage}
                          setSelectedPage={() => mobileOnClick(selectedPage)}
                        />
                      </div>
                      <div className="navbar__item">
                        <Link
                          page="Background"
                          selectedPage={selectedPage}
                          setSelectedPage={() => mobileOnClick(selectedPage)}
                        />
                      </div>
                      <div className="navbar__item">
                        <Link
                          page="Projects"
                          selectedPage={selectedPage}
                          setSelectedPage={() => mobileOnClick(selectedPage)}
                        />
                      </div>
                      <div className="navbar__item">
                        <Link
                          page="Contact"
                          selectedPage={selectedPage}
                          setSelectedPage={() => mobileOnClick(selectedPage)}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    className="navbar__hamburger"
                    onClick={() => setMenuToggled(!menuToggled)}
                  >
                    <Bars3Icon className="navbar__hamburger-icon" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
