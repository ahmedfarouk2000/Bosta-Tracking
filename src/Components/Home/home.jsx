import React, { useEffect, useState } from "react";
import "./home.css";
import Navbar from "../Navbar/navbar";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Home = () => {
  const [lang, setLang] = useState(true);
  const [directionSection, setDirectionSection] = useState({
    flexDirection: "row",
  });

  const [directionText, setDirectionText] = useState({
    textAlign: "end",
  });

  const ToggleLang = () => {
    setLang(!lang);
  };
  useEffect(() => {
    if (lang) {
      setDirectionSection({ flexDirection: "row" });

      setDirectionText({ textAlign: "end" });

      i18n.changeLanguage("ar");
    } else {
      setDirectionSection({ flexDirection: "row-reverse" });

      setDirectionText({ textAlign: "start" });

      i18n.changeLanguage("en");
    }
  }, [lang]);

  const { t } = useTranslation();

  const [shipment, setShipment] = useState(true);

  const ToggleShipment = () => {
    setShipment(!shipment);
  };

  return (
    <>
      <div className="home-container">
        <Navbar></Navbar>

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
                </h2>
              </div>
            </div>

            <div className="card-track"></div>
          </div>
        </div>
        <button onClick={ToggleLang}> toggggggggle lang</button>
        <button onClick={ToggleShipment}>
          {" "}
          togglee between cancel or delivered
        </button>
      </div>
    </>
  );
};

export default Home;
