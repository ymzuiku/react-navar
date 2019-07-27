import * as React from 'react';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const BlodTitle: React.FC<IProps> = ({ className, ...rest }) => {
  return <h2 className={`m-0 p-0 font-700 text-3xl ${className}`} {...rest} />;
};
