import './styles.scss';

import React, { PropsWithChildren } from 'react';

import { classname } from '../../helpers/classname.tsx';

export enum ButtonAlign {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export enum ButtonType {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset'
}

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum ButtonDisplay {
  Block = 'block',
  Inline = 'inline'
}

interface Props {
  align?: ButtonAlign;
  display?: ButtonDisplay;
  style?: ButtonStyle;
  type?: ButtonType;
  onClick?: () => void;
}

export const Button = ({
  children,
  align = ButtonAlign.Left,
  display = ButtonDisplay.Block,
  style = ButtonStyle.Primary,
  type = ButtonType.Button,
  onClick
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={classname('eq-button', {
        'eq-button-primary': style === ButtonStyle.Primary,
        'eq-button-center': align === ButtonAlign.Center,
        'eq-button-right': align === ButtonAlign.Right,
        'eq-button-display-inline': display === ButtonDisplay.Inline
      })}>
      <button onClick={onClick} type={type}>
        {children}
      </button>
    </div>
  );
};
