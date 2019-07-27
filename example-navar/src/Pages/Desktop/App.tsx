import * as React from 'react';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const App: React.FC<IProps> = () => {
  return <div>today</div>;
};
