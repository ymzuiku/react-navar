import * as React from 'react';

import { safeBottom, safeTop } from './device';
import { IHistory, IPosAnime, IScroll } from './navar.interface';
import { navarManager } from './navarManager';

export interface IChildProps {
  scroll: IScroll;
}

interface IRenderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  history: IHistory;
}

interface INavarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  nowPath?: string;
  path: string;
}

document.body.style.setProperty('--navar-background-color', '#fff');
document.body.style.setProperty('--navar-mask-color', 'rgba(0,10,20,0.2)');

const Render: React.FC<IRenderProps> = ({ history, children }) => {
  const [scroll, setScroll] = React.useState({ top: 0, left: 0 });
  const [anime, setAnime] = React.useState<IPosAnime>({ ...history.from, gesturing: false, instant: true });

  history.update = setAnime;

  React.useEffect(() => {
    if (!anime.gesturing) {
      setAnime({ ...history.from, gesturing: false, instant: true });
    }
  }, [history]);

  React.useEffect(() => {
    if (anime.instant && !anime.gesturing) {
      setAnime({ ...history.to, gesturing: false, instant: false });
    }
  }, [anime]);

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
          transition: anime.instant ? undefined : history.transition,
          opacity: 1 - anime.x,
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: history.index * 10 - 1,
        }}
      />
      <div
        onScroll={handleOnScroll}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--navar-background-color)',
          transition: anime.instant ? undefined : history.transition,
          transform: `translateX(${anime.x * 100}%)`,
          zIndex: history.index * 10,
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
  const { historys } = React.useContext(navarManager.ctx);
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
