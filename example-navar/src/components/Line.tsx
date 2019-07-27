import * as React from 'react';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  height: number;
  scale: number;
}

export const Line: React.FC<IProps> = ({ height, scale, children, style, ...rest }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        WebkitOverflowScrolling: 'touch',
        overflow: 'auto',
        backgroundColor: '#fff',
        transform: 'scale(1, 0.5)',
        ...style,
      }}
    />
  );
};
