import * as React from 'react';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Search: React.FC<IProps> = () => {
  return (
    <div inlist="center; h:100vh;">
      <h2>Search</h2>
    </div>
  );
};
