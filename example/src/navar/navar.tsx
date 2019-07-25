import * as React from 'react';

import { safeBottom, safeTop } from './device';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children(): any;
}

export interface ICssvar {
  '--navar-background-color'?: string;
}

document.body.style.setProperty('--navar-background-color', '#fff');

export const Navigation: React.FC<IProps> = ({ children }) => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--navar-background-color)' }}>
      <div style={{ height: safeTop }} />
      {children()}
      <div style={{ height: safeBottom }} />
    </div>
  );
};
