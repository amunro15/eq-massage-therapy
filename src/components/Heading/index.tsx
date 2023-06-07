import React, { PropsWithChildren } from 'react';

export enum HeadingType {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3'
}

interface Props {
  type: HeadingType;
}

export const Heading = ({ children, type }: PropsWithChildren<Props>) => {
  switch (type) {
    case HeadingType.H1:
      return <h1 className="eq-heading">{children}</h1>;
    case HeadingType.H2:
      return <h2 className="eq-heading">{children}</h2>;
    case HeadingType.H3:
      return <h3 className="eq-heading">{children}</h3>;
    default:
      return <h1 className="eq-heading">{children}</h1>;
  }
};
