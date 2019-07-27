import { cssin } from 'cssin';
import * as React from 'react';

export interface ICellProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {}

document.body.style.setProperty('--hr-cell-hover-color', 'rgba(0, 0, 0, 0.05)');
document.body.style.setProperty('--hr-cell-border-bottom', '0.4px solid rgba(0, 0, 0, 0.2)');
cssin(`
.tt-cell {
  background-color: rgba(0,0,0,0);
}
.tt-cell:active {
  background-color: var(--hr-cell-hover-color);
}
`);

export const Cell: React.FC<ICellProps> = ({ children, style, ...rest }) => {
  return (
    <a
      className="tt-cell"
      style={{
        padding: '10px',
        height: '40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottom: 'var(--hr-cell-border-bottom)',
        ...style,
      }}
      {...rest}>
      {children}
    </a>
  );
};
