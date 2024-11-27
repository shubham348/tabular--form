import React, { useState } from "react";
import { generateTabId } from "../../utils/tabutils";
import Tabs from "../Tabs/Tabs";
import "./formContainer.scss";
import TabContent from "../Tabs/TabContent";
import PersonalInformation from "./Components/PersonalInformation";

const TABS = [
  "Personal Information",
  "Address Information",
  "Family Details",
  "Qualification",
  "LifeStyle Information",
];

const modules = {
  personalInformation: "",
};

const FormContainer = () => {
  const [activeTab, setActiveTab] = useState("personalInformation");

  const handleTabChange = (_e, id) => {
    setActiveTab(id);
  };

  function getTabStatus(id) {
    return activeTab === id;
  }

  return (
    <div className="form">
      <div className="profile__container"></div>
      <div className="form__layout row main-content">
        <div className="left-section col-lg-4">
          <Tabs
            tabs={TABS}
            initialValue={"personalInformation"}
            handleTabChange={handleTabChange}
            getCustomId={generateTabId}
          />
        </div>
        <div className="right-section col-lg-8">
          <TabContent
            isActive={getTabStatus("personalInformation")}
            value={"personalInformation"}
          >
            <PersonalInformation/>
          </TabContent>
          <TabContent
            isActive={getTabStatus("familyDetails")}
            value={"familyDetails"}
          >
            Family Details
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
