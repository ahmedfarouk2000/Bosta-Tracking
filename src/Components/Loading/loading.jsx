import React, { useEffect, useState } from "react";
import "./loading.css";

import i18n from "../../i18n";

import bostaLogo from "../../assets/photos/bosta-logo-2.png";

import { useTranslation } from "react-i18next";

import { Fade } from "react-reveal";

const Loading = () => {
  const [closeLoading, setCloseLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCloseLoading(!closeLoading);
    }, 1800);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div
        className={`${
          closeLoading ? "loading-wrapper-close" : "loading-wrapper-open"
        }`}
      >
        <div className="content">
          <Fade top distance="80%" delay={0} duration={1500}>
            <div className="upper-content">
              <div className="image-container">
                <img src={bostaLogo} alt="" />
              </div>

              <h2> {t("Bosta")}</h2>
            </div>
          </Fade>

          <span class="loader"></span>
        </div>
      </div>
    </>
  );
};

export default Loading;
