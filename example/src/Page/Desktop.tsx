import * as React from 'react';

import { Cell } from '../components/Cell';
import { INavarFloatProps, Navar, navarManager, scope } from '../lib';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header: React.FC<INavarFloatProps> = ({ layout, onScroll }) => {
  const [heightRate, setHeightRate] = React.useState(-1);

  React.useEffect(() => {
    onScroll(({ scrollTop }: any) => {
      setHeightRate(scope(scrollTop / 200, -1, 1));
    });
  }, [onScroll]);

  return (
    <div
      style={{
        color: '#fff',
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        zIndex: layout.zIndex + 1,
        height: layout.topHeight - heightRate * 54,
        paddingTop: layout.topSafe,
        backgroundColor: '#f33',
      }}>
      Header
    </div>
  );
};

const Footer: React.FC<INavarFloatProps> = () => {
  return <div>Header</div>;
};

const Floats = (props: any) => (
  <>
    <Header {...props} />
    <Footer {...props} />
  </>
);

export const Desktop: React.FC<IProps> = () => {
  return (
    <Navar path="Desktop" layout={{ topHeight: 100 }} renderFloat={Floats}>
      <div style={{ width: '100%' }}>
        <div>desktop</div>
        <div style={{ position: 'fixed', left: 0, top: 400, zIndex: 100 }}>in-float</div>

        <Cell style={{ color: '#00f' }} onClick={() => navarManager.push('SubPage')}>
          open sub-page
        </Cell>
        <Cell>line</Cell>
        <Cell>line</Cell>
        <Cell
          style={{ color: '#00f', position: 'sticky', left: 0, backgroundColor: '#fff' }}
          onClick={() => navarManager.push('SubPage')}>
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
