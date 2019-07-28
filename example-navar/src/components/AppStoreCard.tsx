import * as React from 'react';

import { cssin } from '../cssin';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  dark?: boolean;
  footer?: string;
  full?: boolean;
  info?: string;
  src?: string;
  text?: string;
  title: string;
}

export const AppStoreCard: React.FC<IProps> = ({ dark, full, className, src, title, info, footer, ...rest }) => {
  return (
    <div
      className={cssin(
        className,
        'relative! dis=inline-black m=auto ease-out=all_0.3s scale=1 active:scale=0.97 h=24rem',
        full ? 'w=100vw' : 'my=--5 w=92vw r=--radius-xl box-shadow=--shadow-xl',
        dark ? 'color=--white' : 'color=--black',
      )}
      {...rest}>
      <img
        src={src}
        className={cssin(
          'pointer-events=none absolute. overflow=hidden object-fit=cover h=100% w=100% left. top. z=0',
          !full && 'r=--radius-xl',
        )}
      />
      <div className={cssin`absolute! p=--4 mt=--2 left! top! z=1`}>
        {full && <div className={cssin`h=--top-safe`} />}
        {info && <div className={cssin`font=--font-sm opacity=0.7`}>{info}</div>}
        <h3 className={cssin`font=--font-2xl color=--font-500`}>{title}</h3>
      </div>
      {footer && <div className={cssin`absolute! z=1 p=--4 left! bottom! font=--font-sm opacity=0.7`}>{footer}</div>}
    </div>
  );
};
