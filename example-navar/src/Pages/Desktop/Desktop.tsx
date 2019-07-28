import * as React from 'react';

import { MemoDisplay } from '../../components/Memo';
import { Navar } from '../../navar';

import { App } from './App';
import { DesktopTabbar } from './DesktopTabbar';
import { Game } from './Game';
import { Search } from './Search';
import { Today } from './Today';
import { TodayHeader } from './TodayHeader';
import { Update } from './Update';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Hello: React.FC<IProps> = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const Float = React.useCallback(
    (props) => (
      <>
        <DesktopTabbar selectedIndex={selectedIndex} onChange={setSelectedIndex} {...props} />
        <MemoDisplay isShow={selectedIndex === 0}>
          <TodayHeader {...props} />
        </MemoDisplay>
      </>
    ),
    [selectedIndex],
  );

  return (
    <Navar path="Desktop" renderFloat={Float}>
      <MemoDisplay isShow={selectedIndex === 0}>
        <Today />
      </MemoDisplay>
      <MemoDisplay isShow={selectedIndex === 1}>
        <Game />
      </MemoDisplay>
      <MemoDisplay isShow={selectedIndex === 2}>
        <App />
      </MemoDisplay>
      <MemoDisplay isShow={selectedIndex === 3}>
        <Update />
      </MemoDisplay>
      <MemoDisplay isShow={selectedIndex === 4}>
        <Search />
      </MemoDisplay>
    </Navar>
  );
};
