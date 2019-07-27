import * as React from 'react';

import { Cell } from '../components/Cell';
import { Navar, navarManager } from '../lib';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ThreePage: React.FC<IProps> = () => {
  return (
    <Navar path="ThreePage">
      <div style={{ width: '100%' }}>
        <Cell>ThreePage</Cell>
        <Cell>line</Cell>
        <Cell style={{ color: '#00f' }} onClick={() => navarManager.pop()}>
          goback
        </Cell>
        <Cell>line</Cell>
        <Cell>line</Cell>
        <Cell
          style={{ color: '#00f', position: 'sticky', left: 0, backgroundColor: '#fff' }}
          onClick={() => navarManager.pop()}>
          这行吸顶
        </Cell>
        {new Array(30).fill('1').map((v, i) => {
          return (
            <Cell key={i}>
              <div className="hr-cell">desktop {i}</div>
            </Cell>
          );
        })}
      </div>
    </Navar>
  );
};