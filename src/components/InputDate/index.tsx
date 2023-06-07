import '../Input/styles.scss';

import React from 'react';
import { classname } from '../../helpers/classname.tsx';

interface Props {
  name: string;
  label: string;
  value: string;
  error?: string;
  minDate?: string;
  isDisabled: boolean;
  onChange: (e) => void;
}

export const InputDate = ({ name, label, minDate, value, error, isDisabled, onChange }: Props) => {
  const handleOnChange = (e) => {
    onChange?.(e.target.value);
  };
  return (
    <div
      className={classname('eq-input', {
        'eq-input-error': !!error
      })}>
      <label htmlFor={name}>{label}</label>
      <input
        disabled={isDisabled}
        type="date"
        id={name}
        min={minDate}
        name={name}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
};
