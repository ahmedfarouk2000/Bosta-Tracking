import React, { useEffect } from "react";
import question from "../../assets/photos/question.png";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import "./notFound.css";

const NotFound = () => {
  const { t } = useTranslation();

  const currentTruckId = useSelector((state) => state.CurrentTruckId);
  useEffect(() => {}, [currentTruckId]);

  return (
    <>
      <div className="container">
        <div className="img-container">
          <img src={question} alt="" />
        </div>
        <h2>
          {t("Shipment No. 2")} {currentTruckId} {t("is Not Found")}
        </h2>
      </div>
    </>
  );
};

export default NotFound;
