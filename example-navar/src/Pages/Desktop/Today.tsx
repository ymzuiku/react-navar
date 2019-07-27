import * as React from 'react';

import { useEvent } from '../../hooks';

import { DesktopHeader } from './DesktopHeader';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Today: React.FC<IProps> = () => {
  const [handleScroll, scrollRef] = useEvent();

  return (
    <div onScroll={handleScroll} className="overflow-auto w-full h-vh">
      <DesktopHeader scrollRef={scrollRef} />
      <div>today</div>
      {new Array(500).fill(0).map((v, i) => {
        return <div key={i}>{v}</div>;
      })}
    </div>
  );
};
