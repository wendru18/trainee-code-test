import { useState } from "react";

/**
 * A generic field hook that handles the user input to the input field
 * @param {string} type the type of the field (e.g. text, number etc)
 */
const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const reset = () => {
    setValue("");
  };

  return {
    type,
    value,
    onChange,
    reset,
  };
};

export default useField;