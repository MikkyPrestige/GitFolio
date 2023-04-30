import { useState } from "react";

const useForm = () => {
  const [inputs, setInputs] = useState("");

  const updateForm = (e) => {
    let { value, name } = e.target;
    setInputs({
      // Copy the existing state
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs("");
  };

  // Return the things we want to surface from this custom hook
  return {
    inputs,
    resetForm,
    updateForm,
  };
};

export default useForm;
