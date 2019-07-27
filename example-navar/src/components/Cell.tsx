import { cssin } from 'cssin';
import * as React from 'react';

export interface ICellProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {}

export const Cell: React.FC<ICellProps> = ({className, ...rest }) => {
  return <a className={`block py-4 px-2 border-b border-teal-200 bg-white active:bg-teal-100 ${className}`} {...rest} />;
};
