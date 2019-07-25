import { stat } from 'fs';
import * as React from 'react';

import { safeBottom, safeTop } from './device';
import { IHistory, IPos, IScroll } from './navar.interface';
import { navarCtrl } from './NavarController';

export interface IChildProps {
  scroll: IScroll;
  // setPos(pos: IPos): any;
}

interface IRenderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  history: IHistory;
  // children(param: IChildProps): any;
}

interface INavarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  nowPath?: string;
  path: string;
}

document.body.style.setProperty('--navar-background-color', '#fff');
document.body.style.setProperty('--navar-mask-color', 'rgba(0,10,20,0.2)');
document.body.style.setProperty('--navar-transition', 'all 0.24s ease-out');

const Render: React.FC<IRenderProps> = ({ history, children }) => {
  const [scroll, setScroll] = React.useState({ top: 0, left: 0 });
  const [anime, setAnime] = React.useState(history.from);

  React.useEffect(() => {
    setAnime(history.from);
  }, [history]);

  React.useEffect(() => {
    setAnime(history.to);
  }, [anime.x === history.to.x && anime.y === history.to.y && anime.scale === history.to.scale]);

  const handleOnScroll = React.useCallback((event: any) => {
    setScroll({
      top: event.target.scrollTop,
      left: event.target.scrollLeft,
    });
  }, []);

  const Childs = React.useMemo(() => children, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'fixed', left: 0, top: 0 }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--navar-mask-color)',
          transition: 'var(--navar-transition)',
          opacity: 1 - anime.x,
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 3,
        }}
      />
      <div
        onScroll={handleOnScroll}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--navar-background-color)',
          transition: 'var(--navar-transition)',
          transform: `translateX(${anime.x * 100}%)`,
          zIndex: 4,
          position: 'fixed',
          left: 0,
          top: 0,
        }}>
        <div style={{ height: safeTop }} />
        {Childs}
        <div style={{ height: safeBottom }} />
      </div>
    </div>
  );
};

export const Navar: React.FC<INavarProps> = ({ path, children }) => {
  const { historys } = React.useContext(navarCtrl.ctx);
  let his: IHistory;

  historys.forEach((h) => {
    if (h.path === path) {
      his = h;
    }
  });

  if (his! === undefined) {
    return null;
  }

  return <Render history={his} children={children} />;
};
