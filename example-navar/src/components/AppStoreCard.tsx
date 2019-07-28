import { classn } from '@nuage/classname';
import * as React from 'react';

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
      className={classn({
        [className!]: true,
        'inline-black m-auto ease-out-4 scale-100 active:scale-97 bg-gray-300 relative h-96': true,
        'w-full': full,
        'my-5 w-11/12 rounded-xl shadow-xl': !full,
        'text-white': dark,
        'text-black': !dark,
      })}
      // className={`inline-black m-auto ${full ? 'w-full' : 'my-5 w-11/12 rounded-xl shadow-xl'} h-96 ${
      //   dark ? 'text-white' : 'text-black'
      // } ease-out-4 scale-100 active:scale-97 bg-gray-300 relative ${className}`}
      {...rest}>
      <img
        src={src}
        className={`pointer-events-none absolute ${!full && 'rounded-xl'} object-cover h-full w-full left-0 top-0 z-0`}
      />
      <div className={`absolute p-4 mt-2 left-0 top-0 z-1`}>
        {full && <div className="h-top-safe" />}
        {info && <p className="text-sm opacity-70">{info}</p>}
        <h3 className="text-2xl font-500">{title}</h3>
      </div>
      {footer && <p className="absolute z-1 p-4 left-0 bottom-0 text-sm opacity-70">{footer}</p>}
    </div>
  );
};
