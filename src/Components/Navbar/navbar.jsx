import React, { useEffect, useState } from "react";
import bostaLoga from "../../assets/photos/bosta-logo.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import "./navbar.css";

const Navbar = () => {
  const [lang, setLang] = useState(true);
  const [direction, setDirection] = useState({ flexDirection: "row-reverse" });

  const ToggleLang = () => {
    setLang(!lang);
  };
  useEffect(() => {
    if (lang) {
      setDirection({ flexDirection: "row" });
      i18n.changeLanguage("ar");
    } else {
      setDirection({ flexDirection: "row-reverse" });
      i18n.changeLanguage("en");
    }
  }, [lang]);

  const { t } = useTranslation();

  return (
    <>
      <div className="nav-wrapper">
        <div className="navbar" style={direction}>
          <div className="navbar-group" style={direction}>
            <a className="langaue" onClick={ToggleLang}>
              {t("Lang")}
            </a>
            <a>{t("Log In")}</a>
            <div className="vertical-bar"></div>
            <a>{t("Track Shipment")}</a>
          </div>

          <div className="navbar-group" style={direction}>
            <a>{t("Speak With Us")}</a>
            <a>{t("Pricing")}</a>
            <a>{t("Main Page")}</a>
          </div>

          <div className="navbar-group-logo" style={direction}>
            <a className="logo-text">{t("Bosta")}</a>
            <div className="logo-img">
              <img src={bostaLoga} alt="bosta logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
