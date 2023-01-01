import { useState } from "react";

export default function useForm(initial = {}) {
  // Create a state object for our inputs
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

  // Return the things we want to surface from this custom hook
  return {
    inputs,
    resetForm,
    updateForm,
  };
}

