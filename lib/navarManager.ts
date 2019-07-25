import * as React from 'react';

import { IState } from './navar.interface';

interface IManager {
  animeTime: number;
  ctx: React.Context<IState>;
  sinkRate: number;
  state: IState;
  listen(fn: (state: IState) => any): any;
  pop(instant?: boolean): any;
  push(path: string, option?: any): any;
  replace(path: string, option?: any): any;
  setState(s: IState): any;
}

const ANIMETIME = 350;
const SINKRATE = 0.25;

const defaultState: IState = {
  historys: [
    {
      index: 0,
      beginTime: 0,
      name: 'static',
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
  setState: () => undefined,
  state: { ...defaultState },
  ctx: React.createContext({ ...defaultState }),
  pop: (instant) => {
    if (instant) {
      isLock = false;
      navarManager.state.historys.pop();
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
      name: 'pop',
      from: { x: 0, y: 0, scale: 1 },
      now: { x: 0, y: 0, scale: 1 },
      to: { x: 1, y: 0, scale: 1 },
      transition: `all ${navarManager.animeTime / 1000}s ease-out`,
    };

    navarManager.state.historys[navarManager.state.historys.length - 2] = {
      ...navarManager.state.historys[navarManager.state.historys.length - 2],
      beginTime: Date.now(),
      name: 'pop',
      from: { x: -navarManager.sinkRate, y: 0, scale: 1 },
      now: { x: 0, y: 0, scale: 1 },
      to: { x: 0, y: 0, scale: 1 },
      transition: `all ${navarManager.animeTime / 1000}s ease-out`,
    };

    navarManager.setState({
      historys: [...navarManager.state.historys],
    });

    setTimeout(() => {
      isLock = false;
      navarManager.state.historys.pop();
      navarManager.setState({
        historys: [...navarManager.state.historys],
      });

      listenCache.forEach((fn: any) => {
        fn(navarManager.state);
      });
    }, navarManager.animeTime);
  },
  push: (path, option) => {
    navarManager.state.historys.push({
      path,
      option,
      beginTime: Date.now(),
      name: 'push',
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
        name: 'sinkDown',
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
  },
  replace: () => undefined,
  listen: (fn) => {
    listenCache.add(fn);

    return () => {
      listenCache.delete(fn);
    };
  },
};
