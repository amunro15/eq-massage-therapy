import './styles.scss';

import React from 'react';
import { classname } from '../../helpers/classname.tsx';

interface Props {
  name: string;
  label: string;
  value: string;
  isDisabled: boolean;
  isPrepare?: boolean;
  onChange: (e) => void;
}

export const TextArea = ({ name, label, value, isDisabled, isPrepare, onChange }: Props) => {
  const handleOnChange = (e) => {
    onChange?.(e.target.value);
  };
  return (
    <div
      className={classname('eq-text_area', {
        'eq-input-isPrepare': !!isPrepare
      })}>
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
