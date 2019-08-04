import * as React from 'react';

import { ImgWorker } from './ImgWorker';

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  dark?: boolean;
  footer?: string;
  full?: boolean;
  info?: string;
  inlist?: string;
  src?: string;
  text?: string;
  title: string;
}

export const AppStoreCard: React.FC<IProps> = ({
  dark,
  inlist,
  full,
  src,
  title,
  info,
  footer,
  text,
  ...rest
}) => {
  return (
    <div
      inlist={[
        'relative; dis:inline-black; m:auto; ease-out:0.3s; h:24rem;',
        full
          ? 'w:100vw;'
          : 'scale:1; active:scale:0.97; my:--5; w:92vw; radius:--radius-xl; box-shadow:--shadow-xl;',
        dark ? 'color:--white;' : 'color:--black;',
      ].join(' ')}
      {...rest}
    >
      <ImgWorker
        src={src}
        inlist={`pointer-events:none; absolute; overflow:hidden; object-fit:cover; h:100%; w:100%; left; top; z:0;
        ${!full ? 'radius:--radius-xl;' : ''}`}
      />
      <div inlist="absolute; p:--4; mt:--2; left; top; z:1;">
        {full && <div inlist="h:--top-safe;" />}
        {info && <div inlist="font:--font-sm; opacity:0.7;">{info}</div>}
        <h3 inlist="font:--font-2xl; color:--font-500;">{title}</h3>
      </div>
      {footer && (
        <div inlist="absolute; z:1; p:--4; left; bottom; font:--font-sm; opacity:0.7;">
          {footer}
        </div>
      )}
    </div>
  );
};
