import * as React from 'react';

import { IState } from './navar.interface';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: any;
  defaultPath: string;
  // screens: { [key: string]: any };
}

interface IManager {
  animeTime: number;
  ctx: React.Context<IState>;
  state: IState;
  listen(fn: (state: IState) => any): any;
  pop(): any;
  push(path: string, option?: any): any;
  replace(path: string, option?: any): any;
  setState(s: IState): any;
}

const defaultState: IState = {
  historys: [
    {
      beginTime: 0,
      name: 'static',
      from: { x: 0, y: 0, scale: 1 },
      now: { x: 0, y: 0, scale: 1 },
      to: { x: 0, y: 0, scale: 1 },
      path: '',
    },
  ],
};

const listenCache = new Set();

export const navarCtrl: IManager = {
  animeTime: 300,
  setState: () => undefined,
  state: { ...defaultState },
  ctx: React.createContext({ ...defaultState }),
  pop: () => {
    const lastHis = navarCtrl.state.historys[navarCtrl.state.historys.length - 1];
    navarCtrl.state.historys[navarCtrl.state.historys.length - 1] = {
      ...lastHis,
      beginTime: Date.now(),
      name: 'pop',
      from: { x: 0, y: 0, scale: 1 },
      now: { x: 0, y: 0, scale: 1 },
      to: { x: 1, y: 0, scale: 1 },
    };

    navarCtrl.setState({
      historys: [...navarCtrl.state.historys],
    });

    setTimeout(() => {
      navarCtrl.state.historys.pop();
      navarCtrl.setState({
        historys: [...navarCtrl.state.historys],
      });

      listenCache.forEach((fn: any) => {
        fn(navarCtrl.state);
      });
    }, navarCtrl.animeTime);
  },
  push: (path, option) => {
    navarCtrl.state.historys.push({
      path,
      option,
      beginTime: Date.now(),
      name: 'push',
      from: { x: 1, y: 0, scale: 1 },
      now: { x: 0, y: 0, scale: 1 },
      to: { x: 0, y: 0, scale: 1 },
    });

    navarCtrl.setState({
      historys: [...navarCtrl.state.historys],
    });

    listenCache.forEach((fn: any) => {
      fn(navarCtrl.state);
    });
  },
  replace: () => undefined,
  listen: (fn) => {
    listenCache.add(fn);

    return () => {
      listenCache.delete(fn);
    };
  },
};

export const NavarController: React.FC<IProps> = ({ defaultPath, children }) => {
  navarCtrl.state.historys[0].path = defaultPath;

  const [state, setState] = React.useState<IState>(navarCtrl.state);

  React.useLayoutEffect(() => {
    navarCtrl.setState = setState;
  }, []);

  return <navarCtrl.ctx.Provider value={state}>{children}</navarCtrl.ctx.Provider>;
};
