import * as React from 'react';

import { IState } from './navar.interface';

interface IManager {
  animeTime: number;
  ctx: React.Context<IState>;
  moveThreshold: number;
  // pop(instant?: boolean): any;
  pop: any;
  sinkRate: number;
  startArea: number;
  state: IState;
  listen(fn: (state: IState) => any): any;
  push(path: string, option?: any): any;
  replace(path: string, option?: any): any;
  setState(s: IState): any;
}

const ANIMETIME = 250;
const SINKRATE = 0.3;
const MOVETHRESHOLD = 0.15;
const STARTAREA = 0.48;

const defaultState: IState = {
  historys: [
    {
      index: 0,
      beginTime: 0,
      status: 'static',
      from: { x: 0, y: 0, scale: 1 },
      now: { x: 0, y: 0, scale: 1 },
      to: { x: 0, y: 0, scale: 1 },
      path: '',
      transition: `all ${ANIMETIME / 1000}s ease-out`,
    },
  ],
};

const listenCache = new Set();
let isLock = false;

export const navarManager: IManager = {
  animeTime: ANIMETIME,
  sinkRate: SINKRATE,
  startArea: STARTAREA,
  moveThreshold: MOVETHRESHOLD,
  setState: () => undefined,
  state: { ...defaultState },
  ctx: React.createContext({ ...defaultState }),
  pop: ((instant: boolean) => {
    if (typeof instant === 'boolean' && instant) {
      isLock = false;
      navarManager.state.historys.pop();
      navarManager.state.historys[navarManager.state.historys.length - 1] = {
        ...navarManager.state.historys[navarManager.state.historys.length - 1],
        beginTime: Date.now(),
        status: 'static',
        from: { x: 0, y: 0, scale: 1 },
        now: { x: 0, y: 0, scale: 1 },
        to: { x: 0, y: 0, scale: 1 },
        transition: `all ${(navarManager.animeTime * 1.25) / 1000}s ease-out`,
      };
      navarManager.setState({
        historys: [...navarManager.state.historys],
      });

      listenCache.forEach((fn: any) => {
        fn(navarManager.state);
      });

      return;
    }

    if (isLock) {
      return;
    }
    isLock = true;

    navarManager.state.historys[navarManager.state.historys.length - 1] = {
      ...navarManager.state.historys[navarManager.state.historys.length - 1],
      beginTime: Date.now(),
      status: 'pop',
      from: { x: 0, y: 0, scale: 1 },
      now: { x: 0, y: 0, scale: 1 },
      to: { x: 1, y: 0, scale: 1 },
      transition: `all ${navarManager.animeTime / 1000}s ease-out`,
    };

    navarManager.state.historys[navarManager.state.historys.length - 2] = {
      ...navarManager.state.historys[navarManager.state.historys.length - 2],
      beginTime: Date.now(),
      status: 'sinkUp',
      from: { x: -navarManager.sinkRate, y: 0, scale: 1 },
      now: { x: 0, y: 0, scale: 1 },
      to: { x: 0, y: 0, scale: 1 },
      transition: `all ${(navarManager.animeTime * 1.25) / 1000}s ease-out`,
    };

    navarManager.setState({
      historys: [...navarManager.state.historys],
    });

    setTimeout(() => {
      isLock = false;
      navarManager.state.historys.pop();

      navarManager.state.historys[navarManager.state.historys.length - 1] = {
        ...navarManager.state.historys[navarManager.state.historys.length - 1],
        beginTime: Date.now(),
        status: 'static',
        from: { x: 0, y: 0, scale: 1 },
        now: { x: 0, y: 0, scale: 1 },
        to: { x: 0, y: 0, scale: 1 },
        transition: `all ${navarManager.animeTime / 1000}s ease-out`,
      };

      navarManager.setState({
        historys: [...navarManager.state.historys],
      });

      listenCache.forEach((fn: any) => {
        fn(navarManager.state);
      });
    }, navarManager.animeTime);
  }) as any,
  push: (path, option) => {
    if (isLock) {
      return;
    }
    isLock = true;
    navarManager.state.historys.push({
      path,
      option,
      beginTime: Date.now(),
      status: 'push',
      index: navarManager.state.historys.length,
      from: { x: 1, y: 0, scale: 1 },
      now: { x: 0, y: 0, scale: 1 },
      to: { x: 0, y: 0, scale: 1 },
      transition: `all ${navarManager.animeTime / 1000}s ease-out`,
    });

    if (navarManager.state.historys.length > 1) {
      const lastCount = navarManager.state.historys.length - 2;
      const his = navarManager.state.historys[lastCount];
      navarManager.state.historys[lastCount] = {
        ...his,
        beginTime: Date.now(),
        status: 'sinkDown',
        from: { x: 0, y: 0, scale: 1 },
        now: { x: 0, y: 0, scale: 1 },
        to: { x: -navarManager.sinkRate, y: 0, scale: 1 },
        transition: `all ${navarManager.animeTime / 1000}s ease-out`,
      };
    }

    navarManager.setState({
      historys: [...navarManager.state.historys],
    });

    listenCache.forEach((fn: any) => {
      fn(navarManager.state);
    });

    setTimeout(() => {
      isLock = false;
      const lastCount = navarManager.state.historys.length - 1;
      const his = navarManager.state.historys[lastCount];
      navarManager.state.historys[lastCount] = {
        ...his,
        beginTime: Date.now(),
        status: 'static',
        from: { x: 0, y: 0, scale: 1 },
        now: { x: 0, y: 0, scale: 1 },
        to: { x: 0, y: 0, scale: 1 },
        transition: `all ${navarManager.animeTime / 1000}s ease-out`,
      };

      navarManager.setState({
        historys: [...navarManager.state.historys],
      });
    }, navarManager.animeTime);
  },
  replace: () => undefined,
  listen: (fn) => {
    listenCache.add(fn);

    return () => {
      listenCache.delete(fn);
    };
  },
};
