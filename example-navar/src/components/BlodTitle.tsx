import * as React from 'react';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const BlodTitle: React.FC<IProps> = ({ inlist, ...rest }) => {
  return <h2 inlist={`m:0; p:0; font-widget:700; font:font-3xl; ${inlist};`} {...rest} />;
};
