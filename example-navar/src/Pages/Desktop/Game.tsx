
import * as React from 'react';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

// 设置一个全局的 css-value
document.body.style.setProperty('--button-color', '#fff');

export const Game: React.FC<IProps> = () => {
  return (
    <div inlist="center; h:100vh">
      <div
        inlist="background-color:#f66; padding:1.2rem; active:background-color:#f33; color:--button-color; border:2px solid #f33; border-radius:0.5rem;">
        Button
      </div>
    </div>
  );
};
