import * as React from 'react';

export interface ICellProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {}

export const Cell: React.FC<ICellProps> = ({ inlist, ...rest }) => {
  return (
    <a inlist={`dis:block; py:--4; px:--2; border-b: 1px solid var(--teal-200); bg:--white; active:bg:--teal-100; ${inlist};`} {...rest} />
  );
};
