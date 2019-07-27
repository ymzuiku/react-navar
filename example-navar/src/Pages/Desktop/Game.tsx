import * as React from 'react';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Game: React.FC<IProps> = () => {
  return <div>Game</div>;
};
