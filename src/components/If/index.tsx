import React, { PropsWithChildren } from 'react';

interface Props {
  test: boolean;
}

export const If = ({ children, test }: PropsWithChildren<Props>) => {
  if (test) {
    return <>{children}</>;
  }
  return null;
};
