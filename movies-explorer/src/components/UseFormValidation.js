import { useCallback, useState } from "react";

export function useFormValidation() {
  const [values, setValues] = useState({}); //name: '', email: '', password: ''
  const [errors, setErrors] = useState({}); //name: '', email: '', password: ''
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setValues((prevState) => ({ ...prevState, [name]: value }));
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setValues };
}
