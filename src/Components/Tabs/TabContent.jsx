import React from "react";

const TabContent = ({ value, isActive, children, ...other }) => {
  return (
    <div
      hidden={!isActive}
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      {...other}
    >
      {children}
    </div>
  );
};

export default TabContent;
