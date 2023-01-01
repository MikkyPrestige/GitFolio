import { useState } from "react";

const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial);

  const resetForm = () => {
    setInputs(initial);
  }

  const updateForm = (e) => {
    let { value, name, type } = e.target;
    if (type === "number") {
      value = parseInt(value);
    }
    if (type === "file") {
      [value] = e.target.files;
    }
    setInputs({
      // Copy the existing state
      ...inputs,
      [name]: value,
    });
  }

  const clearForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ""])
    );
    setInputs(blankState);
  }

  // Return the things we want to surface from this custom hook
  return {
    inputs,
    resetForm,
    updateForm,
    clearForm,
  };
}

export default useForm;

