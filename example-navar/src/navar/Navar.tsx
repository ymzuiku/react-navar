/* eslint-disable react-hooks/exhaustive-deps */

import * as React from 'react';

import { bottomSafe, topSafe } from './device';
import { IHistory, ILayout, IPosAnime, IScroll } from './navar.interface';
import { navarManager } from './navarManager';

export interface IChildProps {
  scroll: IScroll;
}

interface ILayoutParams {
  bottomHeight?: number;
  bottomSafe?: number;
  topHeight?: number;
  topSafe?: number;
}

export interface INavarFloatProps {
  anime: IPosAnime;
  history: IHistory;
  layout: ILayout;
  onScroll(event: any): any;
}

export interface INavarProps {
  layout?: ILayoutParams;
  nowPath?: string;
  path: string;
  renderFloat?(props: INavarFloatProps): any;
}

interface IRenderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  history: IHistory;
  layout: ILayout;
  renderFloat(props: INavarFloatProps): any;
}

document.body.style.setProperty('--navar-background-color', '#fff');
document.body.style.setProperty('--navar-mask-color', 'rgba(0,5,15,0.3)');

const Render: React.FC<IRenderProps> = ({ history, children, layout, renderFloat, style, ...rest }) => {
  const [anime, setAnime] = React.useState<IPosAnime>({
    ...history.from,
    fix: 1,
    gesturing: false,
    instant: true,
  });

  const { current: scrollObs } = React.useRef({
    listenCache: new Set(),
    listen: (fn: any) => {
      scrollObs.listenCache.add(fn);

      return () => {
        scrollObs.listenCache.delete(fn);
      };
    },
  });

  React.useEffect(() => {
    history.update = setAnime;

    if (!anime.gesturing) {
      setAnime({ ...history.from, gesturing: false, fix: 1, instant: true });
    }
  }, [history]);

  React.useEffect(() => {
    if (anime.instant && !anime.gesturing) {
      setAnime({ ...history.to, gesturing: false, fix: 1, instant: false });
    }
  }, [anime]);

  const handleOnScroll = React.useCallback((event: any) => {
    const target = event.target;
    if (requestAnimationFrame) {
      requestAnimationFrame(() => {
        scrollObs.listenCache.forEach((fn: any) => fn(target));
      });
    } else {
      scrollObs.listenCache.forEach((fn: any) => fn(target));
    }
  }, []);

  // const isStatic = !anime.instant && anime.gesturing && history.status === 'static';
  const isStatic = false;
  // console.log(history.path, isStatic, history);

  return (
    <>
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
          zIndex: layout.zIndex - 1,
        }}
      />
      <div
        onScroll={renderFloat ? handleOnScroll : undefined}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--navar-background-color)',
          transition: anime.instant ? undefined : history.transition,
          transform: !isStatic ? `translateX(${anime.x * 100}%)` : undefined,
          overflow: anime.gesturing ? 'hidden' : 'auto',
          pointerEvents: anime.gesturing && anime.x !== 0 ? 'none' : undefined,
          WebkitOverflowScrolling: 'touch',
          // boxShadow: `-4px 0px 13px rgba(0,10,20,${(1 - anime.x) * 0.2})`,
          zIndex: layout.zIndex,
          position: 'fixed',
          left: isStatic ? anime.x : 0,
          top: isStatic ? anime.y : 0,
          ...style,
        }}
        {...rest}>
        <div style={{ height: layout.topHeight + layout.topSafe }} />
        {children}
        {layout.bottomHeight > 0 && <div style={{ height: layout.bottomSafe + layout.bottomHeight }} />}
      </div>
      {renderFloat && renderFloat({ anime, history, layout, onScroll: scrollObs.listen })}
    </>
  );
};

export const Navar: React.FC<INavarProps> = ({ path, layout, renderFloat, ...rest }) => {
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

  const theLayout = {
    zIndex: (his.index + 1) * 10,
    bottomSafe,
    topSafe,
    topHeight: 0,
    bottomHeight: 0,
    ...layout,
  };

  return <Render renderFloat={renderFloat as any} layout={theLayout as any} history={his} {...rest} />;
};
