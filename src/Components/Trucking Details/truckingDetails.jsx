import React, { useEffect, useState } from "react";

import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

import question from "../../assets/photos/question.png";

import "./truckingDetails.css";

const TruckingDetails = () => {
  const { t } = useTranslation();

  const [lang, setLang] = useState(true); // true means arabic
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
      // arabic
      setDirectionSection({ flexDirection: "row" });

      setDirectionText({ textAlign: "end" });

      i18n.changeLanguage("ar");
    } else {
      //english
      setDirectionSection({ flexDirection: "row-reverse" });

      setDirectionText({ textAlign: "start" });

      i18n.changeLanguage("en");
    }
  }, [lang]);
  return (
    <>
      <div className="truck-details-wrapper">
        <div className="truck-details" style={directionSection}>
          <div className="truck-details-left">
            <h2 style={directionText}> {t("Shipment Address")}</h2>

            <p style={directionText}>{t("Address")}</p>

            <div className="truck-details-left-card">
              <div className="truck-details-left-card-left">
                <h2 style={{ textAlign: "center" }}>
                  {t("Is There an Issue With Your Shipment?!")}
                </h2>
                <button>{t("Report a Problem")}</button>
              </div>

              <div className="truck-details-left-card-right">
                <img src={question} alt="" />
              </div>
            </div>
          </div>

          <div className="truck-details-right">
            <h2 style={directionText}>{t("Shipment Details")}</h2>

            <table className="truck-details-table">
              <tr className="table-header" style={directionSection}>
                <td className={lang ? "padding-left" : "padding-right"}>
                  <h3 style={directionText}>{t("Details")}</h3>
                </td>
                <td>
                  <h3 style={directionText}>{t("Time")}</h3>
                </td>
                <td>
                  <h3 style={directionText}>{t("Date")}</h3>
                </td>
                <td className={lang ? "padding-right" : "padding-left"}>
                  <h3 style={directionText}>{t("Branch")}</h3>
                </td>
              </tr>
              <tr style={directionSection}>
                <td className={lang ? "padding-left" : "padding-right"}>
                  <h3 style={directionText}>Nameeeeeeeeeeeee</h3>
                </td>
                <td>
                  <h3 style={directionText}>Age</h3>
                </td>
                <td>
                  <h3 style={directionText}>City</h3>
                </td>
                <td className={lang ? "padding-right" : "padding-left"}>
                  <h3 style={directionText}>City</h3>
                </td>
              </tr>
              <tr style={directionSection}>
                <td className={lang ? "padding-left" : "padding-right"}>
                  <h3 style={directionText}>Name</h3>
                </td>
                <td>
                  <h3 style={directionText}>Age</h3>
                </td>
                <td>
                  <h3 style={directionText}>City</h3>
                </td>
                <td className={lang ? "padding-right" : "padding-left"}>
                  <h3 style={directionText}>City</h3>
                </td>
              </tr>
              <tr style={directionSection}>
                <td
                  className={`remove-bottom-border ${
                    lang ? "padding-left" : "padding-right"
                  }`}
                >
                  <h3 style={directionText}>Name</h3>
                </td>
                <td className="remove-bottom-border">
                  <h3 style={directionText}>Age</h3>
                </td>
                <td className="remove-bottom-border">
                  <h3 style={directionText}>City</h3>
                </td>
                <td
                  className={`remove-bottom-border ${
                    lang ? "padding-right" : "padding-left"
                  }`}
                >
                  <h3 style={directionText}>City</h3>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <button onClick={ToggleLang}>toggggggggle lang details</button>
    </>
  );
};

export default TruckingDetails;
