import * as React from 'react';

import { Navigation } from '../navar';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Desktop: React.FC<IProps> = () => {
  return (
    <Navigation>
      {() => (
        <div style={{ width: '100%', height: '100%' }}>
          <div>hello</div>
        </div>
      )}
    </Navigation>
  );
};
