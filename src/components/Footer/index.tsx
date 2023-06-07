import './styles.scss';

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

export const Input = ({ name, label, value, error, isDisabled, onChange }: Props) => {
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
        id={name}
        type="text"
        name={name}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
};
