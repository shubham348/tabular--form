import React, { useState, useEffect } from "react";
import "../InputFields/inputFields.scss"

const MaskedInput = ({
  value,
  onChange,
  maskFormat,
  containerClass,
  ...rest
}) => {
  const [maskedValue, setMaskedValue] = useState("");
  const [unmaskedValue, setUnmaskedValue] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!maskFormat) {
      if (maskedValue !== value) setMaskedValue(value);
      if (unmaskedValue !== value) setUnmaskedValue(value);
    } else {
      const newMaskedValue = maskFormat(value);
      const newUnmaskedValue = maskFormat(value, false);
      if (maskedValue !== newMaskedValue) setMaskedValue(newMaskedValue);
      if (unmaskedValue !== newUnmaskedValue)
        setUnmaskedValue(newUnmaskedValue);
    }
  }, [value, maskFormat, maskedValue, unmaskedValue]);

  const handleChange = (e) => {
    const input = e.target.value.trim();
    const isAdding = input.length > maskedValue.length;
    const actualValue = isAdding
      ? value + input.slice(-1)
      : value.slice(0, value.length - 1);
    onChange && onChange(actualValue);
  };

  return (
    <div className={containerClass}>
      <input
        value={show ? unmaskedValue : maskedValue}
        onChange={(e) => handleChange(e)}
        {...rest}
      />
      <i onClick={()=>setShow((_prevValue)=>!_prevValue)} class={`bx bx-${show ? "show" : "hide"}`} />
    </div>
  );
};

export default MaskedInput;
