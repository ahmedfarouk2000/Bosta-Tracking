import React, { useEffect, useState } from "react";

import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

import question from "../../assets/photos/question.png";

import "./truckingDetails.css";

import { useSelector } from "react-redux";

import { Fade } from "react-reveal";

const TruckingDetails = () => {
  const { t } = useTranslation();

  const [directionSection, setDirectionSection] = useState({
    flexDirection: "row",
  });

  const [directionText, setDirectionText] = useState({
    textAlign: "end",
  });

  const currentTruck = useSelector((state) => state.CurrentTruck);

  useEffect(() => {}, [currentTruck]);

  const currentLanguage = useSelector((state) => state.CurrentLanguage);

  useEffect(() => {
    if (currentLanguage) {
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
  }, [currentLanguage]);

  const convertDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day}/${month}/${year}`;
  };

  const convertTime = (timestamp) => {
    if (!timestamp) return "";

    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const period = hours < 12 ? "am" : "pm  ";
    const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;

    return formattedTime;
  };

  return (
    <>
      <div className="truck-details-wrapper">
        <div className="truck-details" style={directionSection}>
          <Fade left distance="30%" delay={600} duration={1400}>
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
          </Fade>
          <Fade right distance="30%" delay={600} duration={1400}>
            <div className="truck-details-right">
              <h2 style={directionText}>{t("Shipment Details")}</h2>

              <table className="truck-details-table">
                <tr className="table-header" style={directionSection}>
                  <td
                    className={
                      currentLanguage ? "padding-left" : "padding-right"
                    }
                  >
                    <h3 style={directionText}>{t("Details")}</h3>
                  </td>
                  <td>
                    <h3 style={directionText}>{t("Time")}</h3>
                  </td>
                  <td>
                    <h3 style={directionText}>{t("Date")}</h3>
                  </td>
                  <td
                    className={
                      currentLanguage ? "padding-right" : "padding-left"
                    }
                  >
                    <h3 style={directionText}>{t("Branch")}</h3>
                  </td>
                </tr>

                {currentTruck?.TransitEvents?.map((item, index) =>
                  index != currentTruck?.TransitEvents?.length - 1 ? (
                    <tr style={directionSection} className="light-font">
                      <td
                        className={
                          currentLanguage ? "padding-left" : "padding-right"
                        }
                      >
                        <h3 style={directionText}>{t(item?.state)}</h3>
                      </td>
                      <td>
                        <h3 style={directionText}>
                          {convertTime(item?.timestamp) != ""
                            ? convertTime(item?.timestamp)
                            : t("Date is Not Defined")}
                        </h3>
                      </td>
                      <td>
                        <h3 style={directionText}>
                          {convertDate(item?.timestamp) != ""
                            ? convertDate(item?.timestamp)
                            : t("Date is Not Defined")}
                        </h3>
                      </td>
                      <td
                        className={
                          currentLanguage ? "padding-right" : "padding-left"
                        }
                      >
                        <h3 style={directionText}>{t("Nasr City")}</h3>
                      </td>
                    </tr>
                  ) : (
                    <tr style={directionSection} className="light-font">
                      <td
                        className={`remove-bottom-border ${
                          currentLanguage ? "padding-left" : "padding-right"
                        }`}
                      >
                        <h3 style={directionText}>{t(item?.state)}</h3>
                      </td>
                      <td className="remove-bottom-border">
                        <h3 style={directionText}>
                          {convertTime(item?.timestamp) != ""
                            ? convertTime(item?.timestamp)
                            : t("Date is Not Defined")}
                        </h3>
                      </td>
                      <td className="remove-bottom-border">
                        <h3 style={directionText}>
                          {convertDate(item?.timestamp) != ""
                            ? convertDate(item?.timestamp)
                            : t("Date is Not Defined")}
                        </h3>
                      </td>
                      <td
                        className={`remove-bottom-border ${
                          currentLanguage ? "padding-right" : "padding-left"
                        }`}
                      >
                        <h3 style={directionText}>{t("Nasr City")}</h3>
                      </td>
                    </tr>
                  )
                )}
              </table>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default TruckingDetails;
