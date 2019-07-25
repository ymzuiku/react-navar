import * as React from 'react';

import { Navar, navarCtrl } from '../navar';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const SubPage: React.FC<IProps> = () => {
  return (
    <Navar path="SubPage">
      <div style={{ width: '100%' }}>
        <div>subPage</div>
        <div
          onClick={() => {
            navarCtrl.pop();
          }}>
          goback
        </div>
      </div>
    </Navar>
  );
};
