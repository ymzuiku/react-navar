import * as React from 'react';

import { Cell } from '../components/Cell';
import { Navar, navarCtrl } from '../navar';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Desktop: React.FC<IProps> = () => {
  return (
    <Navar path="Desktop">
      <div style={{ width: '100%' }}>
        <div>desktop</div>
        <Cell style={{ color: '#00f' }} onClick={() => navarCtrl.push('SubPage')}>
          open sub-page
        </Cell>
        <Cell>line</Cell>
        <Cell>line</Cell>
        <Cell
          style={{ color: '#00f', position: 'sticky', left: 0, backgroundColor: '#fff' }}
          onClick={() => navarCtrl.push('SubPage')}>
          这行吸顶
        </Cell>
        {new Array(30).fill('1').map((v, i) => {
          return (
            <div key={i}>
              <div className="hr-cell">desktop {i}</div>
            </div>
          );
        })}
      </div>
    </Navar>
  );
};
