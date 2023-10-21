import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

import truck from "../../assets/icons/truck.svg";
import check from "../../assets/icons/check.svg";

import "./trackingCard.css";
const TrackingCard = () => {
  const [lang, setLang] = useState(true); // true means arabic
  const [directionSection, setDirectionSection] = useState({
    flexDirection: "row",
  });

  const [directionText, setDirectionText] = useState({
    textAlign: "end",
  });

  const [directionTruck, setDirectionTruck] = useState({
    transform: "rotateY(180deg)",
  });

  const ToggleLang = () => {
    setLang(!lang);
  };
  useEffect(() => {
    if (lang) {
      // arabic
      setDirectionSection({ flexDirection: "row" });

      setDirectionText({ textAlign: "end" });

      setDirectionTruck({ transform: "rotateY(180deg)" });

      i18n.changeLanguage("ar");
    } else {
      //english
      setDirectionSection({ flexDirection: "row-reverse" });

      setDirectionText({ textAlign: "start" });

      setDirectionTruck({ transform: "rotateY(0deg)" });

      i18n.changeLanguage("en");
    }
  }, [lang]);

  const { t } = useTranslation();

  const trackingLength = 4; // the length of the tracking circle

  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-details" style={directionSection}>
            <div className="card-details-section">
              <h2 className="card-details-label" style={directionText}>
                {t("Arrival Date")}
              </h2>
              <h2 className="card-details-info" style={directionText}>
                2023-10-10
              </h2>
            </div>

            <div className="card-details-section">
              <h2 className="card-details-label" style={directionText}>
                {t("Provider Name")}
              </h2>
              <h2 className="card-details-info" style={directionText}>
                Souq.com
              </h2>
            </div>

            <div className="card-details-section">
              <h2 className="card-details-label" style={directionText}>
                {t("Last Update")}
              </h2>
              <h2 className="card-details-info" style={directionText}>
                2020-10-01
              </h2>
            </div>

            <div className="card-details-section">
              <h2 className="card-details-label" style={directionText}>
                {t("Shipment No.")} 51123
              </h2>
              <h2 className="card-details-info" style={directionText}>
                {t("Shipment Cancelled")}
                {/* {t("Shipment Delivered")} */}
                {/* {t("Sipment Has Not Been Sent")} */}
              </h2>
            </div>
          </div>

          <div className="card-track">
            <div className="card-track-line" style={directionSection}>
              {Array.from({ length: trackingLength }, (_, index) =>
                index != trackingLength - 1 ? (
                  <div
                    className={
                      lang == false && index == 0
                        ? "current-status-last"
                        : "current-status"
                    }
                    key={index}
                  >
                    <div className="current-status-circle-big">
                      <img
                        className="truck"
                        src={truck}
                        alt=""
                        style={directionTruck}
                      />
                      {/* <h1>{index}</h1> */}
                    </div>

                    {lang == false && index == 0 ? (
                      <></>
                    ) : (
                      <div className="current-status-line"></div>
                    )}
                  </div>
                ) : (
                  <div
                    className={
                      lang == false && index == trackingLength - 1
                        ? "current-status"
                        : "current-status-last"
                    }
                  >
                    <div className="current-status-circle-small">
                      <img src={check} alt="" />
                      {/* <h1>{index}</h1> */}
                    </div>

                    {lang == false && index == trackingLength - 1 ? (
                      <div className="current-status-line"></div>
                    ) : (
                      <></>
                    )}
                  </div>
                )
              )}
            </div>

            <div className="card-track-details" style={directionSection}>
              <h2>{t("Shipment Delivered 2")}</h2>

              <div className="card-track-details-card">
                <h2 style={directionText}>{t("Sipment Out For Delivary")}</h2>

                <h2 style={directionText}>
                  {t("Shipment Canceled by Merchant")}
                </h2>
              </div>

              <h2>{t("Shipment Received by Buyer")}</h2>

              <h2>{t("Sipment Created")}</h2>
            </div>
          </div>
        </div>
      </div>
      <button onClick={ToggleLang}> toggggggggle lang above card</button>
    </>
  );
};

export default TrackingCard;
