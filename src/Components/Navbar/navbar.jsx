import React, { useEffect, useState } from "react";
import bostaLoga from "../../assets/photos/bosta-logo.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import "./navbar.css";
import search from "../../assets/icons/search.svg";

import list from "../../assets/icons/list.svg";
import x from "../../assets/icons/x.svg";

import { toggleLanguage } from "../../Store/TruckStore";

import { useSelector, useDispatch } from "react-redux";

import { fetchTruckData } from "../../Store/TruckStore";

import { Fade } from "react-reveal";
import LoadingShipment from "../Loading Shipment/loadingShipment";
// import Loading from "../Loading/loading";

const Navbar = () => {
  const dispatch = useDispatch();

  const [direction, setDirection] = useState({ flexDirection: "row-reverse" });

  const [directionText, setDirectionText] = useState({
    textAlign: "end",
  });

  const ToggleLang = () => {
    dispatch(toggleLanguage());
  };
  const currentLanguage = useSelector((state) => state.CurrentLanguage);

  useEffect(() => {
    if (currentLanguage) {
      setDirection({ flexDirection: "row" });
      setDirectionText({ textAlign: "end" });
      i18n.changeLanguage("ar");
    } else {
      setDirection({ flexDirection: "row-reverse" });
      setDirectionText({ textAlign: "start" });
      i18n.changeLanguage("en");
    }
  }, [currentLanguage]);

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

  const setCurrentTruckFun = () => {
    dispatch(fetchTruckData(inputValue));
    toggleOpenSearch();

    toggleIsLoading();
    setTimeout(() => {
      toggleIsLoading();
    }, 100);
  };

  const [isLoading, setIsLoading] = useState(false);
  const toggleIsLoading = () => {
    setIsLoading(!isLoading);
  };

  const [inputValue, setInputValue] = useState(67151313);
  const inputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <>
      {isLoading && <LoadingShipment></LoadingShipment>}

      <div
        className={openList ? "navbar-layer" : "navbar-layer-closed"}
        onClick={toggleOpenList}
      ></div>

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

      <Fade top distance="80%" delay={0} duration={1200}>
        <div className="nav-wrapper">
          <div className="list-toggle-icon" onClick={toggleOpenList}>
            {openList ? <></> : <img src={list} alt="" />}
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
                    <div className="search-icon" onClick={setCurrentTruckFun}>
                      <img src={search} alt="" />
                    </div>

                    <input
                      className="search-input"
                      type="number"
                      inputmode="numeric"
                      placeholder={t("Tracking No.")}
                      style={directionText}
                      value={inputValue}
                      onChange={inputValueChange}
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

            <div
              className="navbar-group-logo"
              style={direction}
              onClick={reloadPage}
            >
              <a className="logo-text">{t("Bosta")}</a>
              <div className="logo-img">
                <img src={bostaLoga} alt="bosta logo" />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Navbar;
