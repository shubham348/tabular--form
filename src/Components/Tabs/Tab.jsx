import React from "react";
import classNames from "classnames";
import "./tabs.scss";

export const Tab = ({ label, isActive, handleChange, value }) => {
  return (
    <div className={classNames("tab__container")}>
      <button
        className={classNames("tab__button")}
        onClick={(e) => handleChange(e, value, label)}
      >
        {label}
      </button>
    </div>
  );
};


export default Tab;
