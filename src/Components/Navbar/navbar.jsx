import React, { useEffect, useState } from "react";
import bostaLoga from "../../assets/photos/bosta-logo.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import "./navbar.css";
import search from "../../assets/icons/search.svg";

import list from "../../assets/icons/list.svg";
import x from "../../assets/icons/x.svg";

const Navbar = () => {
  const [lang, setLang] = useState(true);
  const [direction, setDirection] = useState({ flexDirection: "row-reverse" });

  const [directionText, setDirectionText] = useState({
    textAlign: "end",
  });

  const ToggleLang = () => {
    setLang(!lang);
  };
  useEffect(() => {
    if (lang) {
      setDirection({ flexDirection: "row" });
      setDirectionText({ textAlign: "end" });
      i18n.changeLanguage("ar");
    } else {
      setDirection({ flexDirection: "row-reverse" });
      setDirectionText({ textAlign: "start" });
      i18n.changeLanguage("en");
    }
  }, [lang]);

  const { t } = useTranslation();

  const [openSearch, setOpenSearch] = useState(false);

  const toggleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };

  const containerClass = openSearch
    ? "search-shipment"
    : "search-shipment-close";

  const [openList, setOpenList] = useState(false);

  const toggleOpenList = () => {
    setOpenList(!openList);
  };

  return (
    <>
      <div className="nav-wrapper">
        <div
          className={openList ? "navbar-layer" : "navbar-layer-closed"}
          onClick={toggleOpenList}
        ></div>
        <div className="list-toggle-icon" onClick={toggleOpenList}>
          {openList ? <></> : <img src={list} alt="" />}
        </div>
        <div className={openList ? "list" : "list-closed"}>
          <div className="list-toggle-icon" onClick={toggleOpenList}>
            {openList ? <img src={x} alt="" /> : <></>}
          </div>

          <div className="navbar-group-logo" style={direction}>
            <a className="logo-text">{t("Bosta")}</a>
            <div className="logo-img">
              <img src={bostaLoga} alt="bosta logo" />
            </div>
          </div>
          <a>{t("Main Page")}</a>
          <a>{t("Pricing")}</a>
          <a>{t("Speak With Us")}</a>
          <a>{t("Track Shipment")}</a>
          <a>{t("Log In")}</a>
          <a className="langaue" onClick={ToggleLang}>
            {t("Lang")}
          </a>
        </div>

        <div className="navbar" style={direction}>
          <div className="navbar-group" style={direction}>
            <a className="langaue" onClick={ToggleLang}>
              {t("Lang")}
            </a>
            <a>{t("Log In")}</a>
            <div className="vertical-bar"></div>

            <div className="track-container">
              <a
                className={
                  openSearch ? "track-shipment-open" : "track-shipment"
                }
                style={{ color: openSearch ? "#e30613" : "" }}
                onClick={toggleOpenSearch}
              >
                {t("Track Shipment")}
              </a>

              <div className={containerClass}>
                <h2 style={directionText}> {t("Track Shipment")}</h2>

                <div className="search-input-container" style={direction}>
                  <div className="search-icon">
                    <img src={search} alt="" />
                  </div>

                  <input
                    className="search-input"
                    type="number"
                    inputmode="numeric"
                    placeholder={t("Tracking No.")}
                    style={directionText}
                  />
                </div>
              </div>
            </div>
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
