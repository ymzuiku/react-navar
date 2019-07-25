import * as React from 'react';

import './Cell.css';

export interface ICellProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {}

export const Cell: React.FC<ICellProps> = ({ children, ...rest }) => {
  return (
    <a className="hr-cell" {...rest}>
      {children}
    </a>
  );
};
