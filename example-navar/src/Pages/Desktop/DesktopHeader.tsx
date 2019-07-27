import * as React from 'react';

import { device, INavarFloatProps, scope } from '../../lib';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  scrollRef: { current: any };
}

export const DesktopHeader: React.FC<IProps> = ({ scrollRef }) => {
  const [heightRate, setHeightRate] = React.useState(0);

  React.useEffect(() => {
    scrollRef.current = (e: any) => {
      setHeightRate(scope(e.target.scrollTop / 200, -1, 1));
    };
  }, []);

  return (
    <div
      className="block bg-gray-100 left-0 top-0 fixed z-10 w-vw pt-top-safe"
      style={{
        height: 100 - heightRate * 54,
        // paddingTop: device.topSafe,
      }}>
      Header
    </div>
  );
};
