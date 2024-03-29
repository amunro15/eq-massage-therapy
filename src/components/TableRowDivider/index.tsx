import './styles.scss';

import React from 'react';
import { Paragraph } from '../Paragraph/index.tsx';
import { Heading, HeadingType } from '../Heading/index.tsx';

interface Props {
  header: string;
  body?: string;
}

export const TableRowDivider = ({ header, body }: Props) => {
  return (
    <div className="eq-table_row_divider">
      <Heading type={HeadingType.H2}>{header}</Heading>
      {body && <Paragraph>{body}</Paragraph>}
    </div>
  );
};
