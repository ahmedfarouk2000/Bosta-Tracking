import React, { useEffect, useState } from "react";
import "./loadingShipment.css";

import bostaLogo from "../../assets/photos/bosta-logo-2.png";

import { useTranslation } from "react-i18next";

import { Fade } from "react-reveal";

import Lottie from "lottie-react";
import truck from "../../assets/icons/truck moving.json";

const LoadingShipment = () => {
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

          <Fade left distance="80%" delay={0} duration={1500}>
            <div className="animation">
              <Lottie animationData={truck} loop={true} autoPlay={true} />
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default LoadingShipment;
