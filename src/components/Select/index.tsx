import './styles.scss';

import React from 'react';
import { Option } from '../../data/exerciseCategories.ts';

interface Props {
  id: string;
  name: string;
  label: string;
  value: string;
  options: Option[];
  onSetSelected: (e) => void;
}

export const Select = ({ id, name, value, options, onSetSelected }: Props) => {
  return (
    <div className="eq-select">
      <select id={id} name={name} onChange={(e) => onSetSelected(e.target.value)} value={value}>
        {options.map((option) => {
          return (
            <option value={option.value} disabled={option?.isDisabled} key={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
