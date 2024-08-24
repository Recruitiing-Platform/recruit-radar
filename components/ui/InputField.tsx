// components/ui/InputField.tsx

import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  labelClassName?: string;
  inputClassName?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null; 
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  placeholder,
  labelClassName = "",
  inputClassName = "",
  value,
  onChange,
  error = null, 
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className={`block mb-2 ${labelClassName}`}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${inputClassName}`}
        style={{ color: "#000030", backgroundColor: "#F5F4FB" }}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
