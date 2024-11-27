import React, { useState } from "react";
import MaskedInput from "../../InputFields/MaskedInput";

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
    <div>
      PersonalInformation
      <MaskedInput
        value={originalValue}
        onChange={setOriginalValue}
        maskFormat={maskSSN}
        maxLength={11}
        containerClass="input__container"
        className="input__field"
      />
    </div>
  );
};

export default PersonalInformation;
