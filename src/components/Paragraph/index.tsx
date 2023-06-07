import React, { PropsWithChildren } from 'react';

export const Paragraph = ({ children }: PropsWithChildren) => {
  return <p className="eq-paragraph">{children}</p>;
};
