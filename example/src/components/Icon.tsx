import * as React from 'react';

export interface IIcon extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  dot?: boolean;
  dotBorder?: string;
  dotColor?: string;
  dotSize?: number;
  font?: string;
  symbol?: string;
}
export const Icon: React.FC<IIcon> = ({
  dot,
  dotSize = 12,
  dotColor = '#f33',
  dotBorder = '1px solid #fff',
  font,
  symbol,
  className = '',
  ...props
}) => {
  let icon = null;

  if (font) {
    icon = <i className={`iconfont ${font} ${className}`} {...props} />;
  } else if (symbol) {
    icon = (
      <svg className={`icon ${className}`} aria-hidden="true" {...(props as any)}>
        <use xlinkHref={`#${symbol}`} />
      </svg>
    );
  }
  if (dot) {
    return (
      <div style={{ position: 'relative' }}>
        {icon}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: dotSize,
            height: dotSize,
            background: dotColor,
            borderRadius: dotSize / 2,
            border: dotBorder,
          }}
        />
      </div>
    );
  }

  return icon;
};
