import React, { useState } from "react";
import MaskedInput from "../../InputFields/MaskedInput";
import "../formContainer.scss";

export const maskSSN = (ssn, maskVisible = true) => {
  let valueHidden = maskVisible ? ssn.replace(/[\d]/g, "X") : ssn;

  if (valueHidden.length <= 3) {
    return valueHidden;
  }

  if (valueHidden.length <= 5) {
    return valueHidden.slice(0, 3) + "-" + valueHidden.slice(3, 5);
  }

  return (
    valueHidden.slice(0, 3) +
    "-" +
    valueHidden.slice(3, 5) +
    "-" +
    ssn.substr(5)
  );
};
const PersonalInformation = () => {
  const [originalValue, setOriginalValue] = useState("");

  return (
    <div className="row">
      <div className="mb-10 col-lg-6 col-md-6 col-sm-12">
      <MaskedInput
          value={originalValue}
          onChange={setOriginalValue}
          maskFormat={maskSSN}
          maxLength={11}
          containerClass="input__container flex-center"
          className="input__field w-90"
        />
      </div>
      <div className="mb-10 col-lg-6 col-md-6 col-sm-12">
        <MaskedInput
          value={originalValue}
          onChange={setOriginalValue}
          maskFormat={maskSSN}
          maxLength={11}
          containerClass="input__container flex-center"
          className="input__field w-90"
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
