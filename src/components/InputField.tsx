import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface InputFieldProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  ariaLabel: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;  
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type,
  placeholder,
  ariaLabel,
  onChange
}) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className="form-control"
        
      />
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default InputField;
