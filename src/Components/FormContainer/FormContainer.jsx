import React, { useState } from "react";
import { generateTabId } from "../../utils/tabutils";
import Tabs from "../Tabs/Tabs";
import TabContent from "../Tabs/TabContent";
import PersonalInformation from "./Components/PersonalInformation";
import "./formContainer.scss";

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
        <div className="left-section col-lg-3">
          <Tabs
            tabs={TABS}
            initialValue={"personalInformation"}
            handleTabChange={handleTabChange}
            getCustomId={generateTabId}
          />
        </div>
        <div className="right-section col-lg-9">
          <TabContent
            isActive={getTabStatus("personalInformation")}
            value={"personalInformation"}
            className="container"
          >
            <PersonalInformation />
          </TabContent>
          <TabContent
            isActive={getTabStatus("familyDetails")}
            value={"familyDetails"}
          >
            <div class="row gy-5">
              <div class="col-6">
                <div class="p-3">Custom column padding</div>
              </div>
              <div class="col-6">
                <div class="p-3">Custom column padding</div>
              </div>
              <div class="col-6">
                <div class="p-3">Custom column padding</div>
              </div>
              <div class="col-6">
                <div class="p-3">Custom column padding</div>
              </div>
            </div>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
