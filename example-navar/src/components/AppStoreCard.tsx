import * as React from 'react';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  dark?: boolean;
  footer?: string;
  info?: string;
  src?: string;
  title: string;
}

export const AppStoreCard: React.FC<IProps> = ({ dark: dart, className, src, title, info, footer, ...rest }) => {
  return (
    <div
      className={`inline-black m-auto my-5 w-11/12 h-96 ${
        dart ? 'text-white' : 'text-black'
      } ease-out-4 scale-100 active:scale-97 rounded-xl bg-gray-300 shadow-xl relative ${className}`}
      {...rest}>
      <img src={src} className="pointer-events-none absolute rounded-xl object-cover h-full w-full left-0 top-0 z-0" />
      <div className="absolute p-4 mt-2 left-0 top-0 z-1">
        {info && <p className="text-sm opacity-70">{info}</p>}
        <h3 className="text-2xl font-500">{title}</h3>
      </div>
      {footer && <p className="absolute z-1 p-4 left-0 bottom-0 text-sm opacity-70">{footer}</p>}
    </div>
  );
};
