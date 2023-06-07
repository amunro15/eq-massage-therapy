import './styles.scss';

import React from 'react';

interface Props {
  name: string;
  label: string;
  value: string;
  isDisabled: boolean;
  onChange: (e) => void;
}

export const TextArea = ({ name, label, value, isDisabled, onChange }: Props) => {
  const handleOnChange = (e) => {
    onChange?.(e.target.value);
  };
  return (
    <div className="eq-text_area">
      <label htmlFor={name}>{label}</label>
      <textarea
        disabled={isDisabled}
        id={name}
        name={name}
        onChange={handleOnChange}
        value={value}
        wrap="hard"
      />
    </div>
  );
};
