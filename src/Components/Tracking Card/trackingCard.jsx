import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

import truck from "../../assets/icons/truck.svg";
import check from "../../assets/icons/check.svg";
import box from "../../assets/icons/box-heart.svg";

import "./trackingCard.css";

import { useSelector } from "react-redux";

import { Fade } from "react-reveal";

const TrackingCard = () => {
  const [directionSection, setDirectionSection] = useState({
    flexDirection: "row",
  });

  const [directionText, setDirectionText] = useState({
    textAlign: "end",
  });

  const [directionTruck, setDirectionTruck] = useState({
    transform: "rotateY(180deg)",
  });

  const currentLanguage = useSelector((state) => state.CurrentLanguage);

  useEffect(() => {
    if (currentLanguage) {
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
  }, [currentLanguage]);

  const { t } = useTranslation();

  const trackingLength = 4; // the length of the tracking circle

  const currentTruck = useSelector((state) => state.CurrentTruck);

  useEffect(() => {
    setCurrentTruckState(getTruckStatus(currentTruck?.CurrentStatus?.state));
  }, [currentTruck]);

  const convertDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let daysOfWeek = [];
    if (!currentLanguage) {
      daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    } else {
      daysOfWeek = [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت",
      ];
    }

    const date2 = new Date(dateString);
    const dayOfWeek = daysOfWeek[date2.getDay()];

    return currentLanguage
      ? `at ${convertTime(dateString)} ${day}/${month}/${year} ${dayOfWeek}`
      : `${dayOfWeek} ${day}/${month}/${year} at ${convertTime(dateString)} `;
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

  const convertDateDelivery = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const year = date.getFullYear();
    const day = date.getDate();

    return `${day} ${getMonthName(dateString)} ${year} `;
  };

  const getMonthName = (dateString) => {
    let months = [];

    if (!currentLanguage) {
      months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    } else {
      months = [
        "يناير",
        "فبراير",
        "مارس",
        "إبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ];
    }

    const date = new Date(dateString);
    const monthIndex = date.getMonth();
    return months[monthIndex];
  };

  const [currentTruckState, setCurrentTruckState] = useState({
    statusWord: "",
    statusTextColor: "",
    statusBackgroundColor: "",
  });

  const getTruckStatus = (status) => {
    let statusObject = {
      statusWord: "",
      statusTextColor: "",
      statusBackgroundColor: "",
    };
    if (!status) return "";

    switch (status) {
      case "DELIVERED": {
        statusObject.statusWord = "Shipment Delivered";
        statusObject.statusTextColor = "status-text-color-green";
        statusObject.statusBackgroundColor = "status-background-color-green";

        break;
      }

      case "DELIVERED_TO_SENDER": {
        statusObject.statusWord = "Sipment Has Not Been Sent";
        statusObject.statusTextColor = "status-text-color-yellow";
        statusObject.statusBackgroundColor = "status-background-color-yellow";

        break;
      }

      case "CANCELLED": {
        statusObject.statusWord = "Shipment Cancelled";
        statusObject.statusTextColor = "status-text-color-red";
        statusObject.statusBackgroundColor = "status-background-color-red";

        break;
      }
    }
    return statusObject;
  };

  return (
    <>
      <Fade right distance="30%" delay={400} duration={1400}>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-details" style={directionSection}>
              <div className="card-details-section">
                <h2 className="card-details-label" style={directionText}>
                  {t("Arrival Date")}
                </h2>
                <h2 className="card-details-info" style={directionText}>
                  {convertDateDelivery(currentTruck?.PromisedDate) != ""
                    ? convertDateDelivery(currentTruck?.PromisedDate)
                    : t("Date is Not Defined")}
                </h2>
              </div>

              <div className="card-details-section">
                <h2 className="card-details-label" style={directionText}>
                  {t("Provider Name")}
                </h2>
                <h2 className="card-details-info" style={directionText}>
                  {/* {t(currentTruck?.provider)} */}
                  {t("Amazon")}
                </h2>
              </div>

              <div className="card-details-section">
                <h2 className="card-details-label" style={directionText}>
                  {t("Last Update")}
                </h2>
                <h2 className="card-details-info" style={directionText}>
                  {convertDate(currentTruck?.CurrentStatus?.timestamp) != ""
                    ? convertDate(currentTruck?.CurrentStatus?.timestamp)
                    : t("Date is Not Defined")}
                </h2>
              </div>

              <div className="card-details-section">
                <h2 className="card-details-label" style={directionText}>
                  {t("Shipment No.")} {currentTruck?.TrackingNumber}
                </h2>
                <h2
                  className={`card-details-info ${currentTruckState?.statusTextColor}`}
                  style={directionText}
                >
                  {t(currentTruckState?.statusWord)}
                </h2>
              </div>
            </div>

            <div className="card-track">
              <div
                className="card-track-line big-screen"
                style={directionSection}
              >
                {Array.from({ length: trackingLength }, (_, index) =>
                  index != trackingLength - 1 ? (
                    <div
                      className={
                        currentLanguage == false && index == 0
                          ? "current-status-last"
                          : "current-status"
                      }
                      key={index}
                    >
                      <div
                        className={`${
                          currentTruckState.statusWord == "Shipment Delivered"
                            ? "current-status-circle-small"
                            : index == 1 || index == 0
                            ? "current-status-circle-big"
                            : "current-status-circle-small"
                        } 
                       ${
                         currentTruckState.statusWord != "Shipment Delivered" &&
                         index >= 1
                           ? currentTruckState?.statusBackgroundColor
                           : currentTruckState.statusWord ==
                             "Shipment Delivered"
                           ? currentTruckState?.statusBackgroundColor
                           : "status-background-color-gray"
                       }`}
                      >
                        {currentTruckState.statusWord ==
                        "Shipment Delivered" ? (
                          <img src={check} alt="" />
                        ) : index == 1 ? (
                          <img
                            className="truck"
                            src={truck}
                            alt=""
                            style={directionTruck}
                          />
                        ) : index == 0 ? (
                          <img src={box} alt="" />
                        ) : (
                          <img src={check} alt="" />
                        )}
                        {/* <h1>{index}</h1> */}
                      </div>

                      {currentLanguage == false && index == 0 ? (
                        <></>
                      ) : (
                        <div
                          className={`current-status-line ${
                            currentLanguage == true &&
                            currentTruckState?.statusWord !=
                              "Shipment Delivered"
                              ? index != 0
                                ? currentTruckState?.statusBackgroundColor
                                : "status-background-color-gray"
                              : currentTruckState?.statusWord !=
                                "Shipment Delivered"
                              ? index != 1
                                ? currentTruckState?.statusBackgroundColor
                                : "status-background-color-gray"
                              : currentTruckState?.statusBackgroundColor
                          }`}
                        >
                          {/* <h1>{index}</h1> */}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      className={
                        currentLanguage == false && index == trackingLength - 1
                          ? "current-status"
                          : "current-status-last"
                      }
                    >
                      <div
                        className={`${
                          currentTruckState.statusWord == "Shipment Delivered"
                            ? "current-status-circle-small"
                            : index != 1
                            ? "current-status-circle-small"
                            : "current-status-circle-big"
                        }  ${
                          currentTruckState.statusWord !=
                            "Shipment Delivered" && index >= 1
                            ? currentTruckState?.statusBackgroundColor
                            : currentTruckState.statusWord ==
                              "Shipment Delivered"
                            ? currentTruckState?.statusBackgroundColor
                            : "status-background-color-gray"
                        }`}
                      >
                        <img src={check} alt="" />
                        {/* <h1>{index}</h1> */}
                      </div>

                      {currentLanguage == false &&
                      index == trackingLength - 1 ? (
                        <div
                          className={`current-status-line ${currentTruckState?.statusBackgroundColor}`}
                        >
                          {/* <h1>{index}</h1> */}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  )
                )}
              </div>

              <div className="card-track-line small-screen">
                {Array.from({ length: trackingLength }, (_, index) =>
                  index != 0 ? (
                    <div className="current-status" key={index}>
                      <div
                        className={`${
                          currentTruckState.statusWord == "Shipment Delivered"
                            ? "current-status-circle-small"
                            : index == 1 || index == 0
                            ? "current-status-circle-big"
                            : "current-status-circle-small"
                        } 
                       ${
                         currentTruckState.statusWord != "Shipment Delivered" &&
                         index >= 1
                           ? currentTruckState?.statusBackgroundColor
                           : currentTruckState.statusWord ==
                             "Shipment Delivered"
                           ? currentTruckState?.statusBackgroundColor
                           : "status-background-color-gray"
                       }`}
                      >
                        {currentTruckState.statusWord ==
                        "Shipment Delivered" ? (
                          <img src={check} alt="" />
                        ) : index == 1 ? (
                          <img
                            className="truck"
                            src={truck}
                            alt=""
                            style={directionTruck}
                          />
                        ) : index == 0 ? (
                          <img src={box} alt="" />
                        ) : (
                          <img src={check} alt="" />
                        )}
                      </div>

                      <div
                        className={`current-status-line ${
                          currentTruckState?.statusWord != "Shipment Delivered"
                            ? index != 1
                              ? currentTruckState?.statusBackgroundColor
                              : "status-background-color-gray"
                            : currentTruckState?.statusBackgroundColor
                        }`}
                      ></div>
                    </div>
                  ) : (
                    <div className="current-status-last">
                      <div
                        className={`${
                          currentTruckState.statusWord == "Shipment Delivered"
                            ? "current-status-circle-small"
                            : "current-status-circle-big"
                        }  ${
                          currentTruckState.statusWord !=
                            "Shipment Delivered" && index >= 1
                            ? currentTruckState?.statusBackgroundColor
                            : currentTruckState.statusWord ==
                              "Shipment Delivered"
                            ? currentTruckState?.statusBackgroundColor
                            : "status-background-color-gray"
                        }`}
                      >
                        {currentTruckState.statusWord ==
                        "Shipment Delivered" ? (
                          <img src={check} alt="" />
                        ) : index == 1 ? (
                          <img
                            className="truck"
                            src={truck}
                            alt=""
                            style={directionTruck}
                          />
                        ) : index == 0 ? (
                          <img src={box} alt="" />
                        ) : (
                          <img src={check} alt="" />
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="card-track-details" style={directionSection}>
                <h2>{t("Shipment Delivered 2")}</h2>

                <div className="card-track-details-card">
                  <h2 style={directionText}>{t("Sipment Out For Delivary")}</h2>

                  <h2
                    style={directionText}
                    className={currentTruckState?.statusTextColor}
                  >
                    {currentTruckState.statusWord == "Shipment Cancelled" ? (
                      t("Shipment Cancelled by Merchant")
                    ) : currentTruckState.statusWord ==
                      "Sipment Has Not Been Sent" ? (
                      t("Customer Not Present at Address")
                    ) : (
                      <></>
                    )}
                  </h2>
                </div>

                <h2>{t("Shipment Received by Buyer")}</h2>

                <h2>{t("Sipment Created")}</h2>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default TrackingCard;
