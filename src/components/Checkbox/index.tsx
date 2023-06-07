import './styles.scss';

import React, { PropsWithChildren } from 'react';
import { classname } from '../../helpers/classname.tsx';

interface Props {
  id: string;
  name: string;
  error?: string;
  isChecked: boolean;
  isDisabled: boolean;
  onChange?: () => void;
}

export const Checkbox = ({
  children,
  id,
  name,
  error,
  isChecked = false,
  isDisabled,
  onChange
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={classname('eq-checkbox', {
        'eq-checkbox-disabled': isDisabled,
        'eq-checkbox-selected': isChecked,
        'eq-checkbox-error': !!error
      })}
      onClick={() => {
        if (!isDisabled) onChange?.();
      }}
      role="button">
      <input disabled={isDisabled} id={id} type="checkbox" name={name} checked={isChecked} />
      {children}
    </div>
  );
};
