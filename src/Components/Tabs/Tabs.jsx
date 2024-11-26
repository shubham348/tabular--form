import React, { useState } from "react";
import classNames from "classnames";
import Tab from "./Tab";
import "./tabs.scss";

export const Tabs = ({
  tabs,
  initialValue = 0,
  handleTabChange,
  children,
  getCustomId,
}) => {
  const [selected, setSelected] = useState(initialValue);

  const handleChange = (e, id, name) => {
    e.preventDefault();
    setSelected(id);
    handleTabChange && handleTabChange(e, id, name);
  };

  return (
    <>
      {tabs?.map((item, index) => {
        const value = !!getCustomId ? getCustomId(item) : index;
        return (
          <Tab
            key={value}
            {...{
              label: item,
              handleChange,
              isActive: selected === value,
              value,
            }}
          />
        );
      })}
      {/* added this for fun u can add child elements also including or ecluding
       array */}
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null;
        const { value } = child.props;
        return React.cloneElement(child, {
          key: value,
          isActive: value === selected,
          handleChange,
        });
      })}
    </>
  );
};

export default Tabs;
