import { useState } from "react";
import "@/containers/navbar/Navbar.scss";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "@/components/links/Link";
import ImageLink from "@/components/links/ImageLink";
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

  return (
    <nav>
      <div className={`navbar${isTop ? " navbar__top" : ""}`}>
        <div className="navbar__wrapper">
          <div className="navbar__inner">
            <div className="navbar__image">
              <ImageLink
                page="Hero"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            {isAboveMediumScreens ? (
              <div className="navbar__desktop">
                <div className="navbar__item">
                  <Link
                    page="Skills"
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
                    page="Experience"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="navbar__item">
                  <Link
                    page="Education"
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
                          page="Skills"
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
                          page="Experience"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                      </div>
                      <div className="navbar__item">
                        <Link
                          page="Education"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                      </div>
                      <div className="navbar__item">
                        <Link
                          page="Contact Me"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
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
