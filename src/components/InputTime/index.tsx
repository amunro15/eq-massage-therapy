import '../Input/styles.scss';

import React from 'react';
import { classname } from '../../helpers/classname.tsx';

interface Props {
  name: string;
  label: string;
  value: string;
  error?: string;
  isDisabled: boolean;
  onChange: (e) => void;
}

export const InputTime = ({ name, label, value, error, isDisabled, onChange }: Props) => {
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
        type="time"
        id={name}
        name={name}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
};
