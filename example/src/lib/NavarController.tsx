import * as React from 'react';

import { IState } from './navar.interface';
import { navarManager } from './navarManager';
import {
  addListenResture,
  getTouchStartX,
  getTouchStartY,
  getTouchX,
  getTouchY,
  removeListenResture,
  scope,
} from './utils';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: any;
  defaultPath: string;
}

let initNavarControllerLock = false;

export const NavarController: React.FC<IProps> = ({ defaultPath, children }) => {
  if (!initNavarControllerLock) {
    initNavarControllerLock = true;
    navarManager.state.historys[0].path = defaultPath;
  }

  const [state, setState] = React.useState<IState>(navarManager.state);
  const { current: touchData } = React.useRef({
    startTime: 0,
    touchStarting: false,
    touchMoving: false,
    startX: 0,
    startY: 0,
    moveX: 0,
    moveY: 0,
    endX: 0,
    endY: 0,
  });

  React.useLayoutEffect(() => {
    navarManager.setState = setState;
  }, []);

  React.useEffect(() => {
    const initTouchData = () => {
      touchData.touchStarting = false;
      touchData.touchMoving = false;
      touchData.startX = 0;
      touchData.startY = 0;
      touchData.moveX = 0;
      touchData.moveY = 0;
      touchData.endX = 0;
      touchData.endY = 0;
      touchData.startTime = 0;
    };
    const touchStart = (event: any) => {
      if (navarManager.state.historys.length === 1) {
        return;
      }

      const startX = getTouchStartX(event);

      if (startX < navarManager.startArea) {
        // event.preventDefault();

        touchData.touchStarting = true;
        touchData.startX = startX;
        touchData.startY = getTouchStartY(event);
        touchData.startTime = Date.now();
      }
    };

    const touchMove = (event: any) => {
      if (!touchData.touchStarting) {
        return;
      }
      const moveX = getTouchX(event);
      const moveY = getTouchY(event);
      const changeX = moveX - touchData.startX;
      const changeY = moveY - touchData.startY;

      if (!touchData.touchMoving && Math.abs(changeY) - Math.abs(changeX) > 0.1) {
        // tslint:disable-next-line
        // touchEnd(event);
        touchData.touchStarting = false;

        return;
      }

      if (changeX > navarManager.moveThreshold) {
        touchData.touchMoving = true;
      }

      if (touchData.touchMoving) {
        // event.preventDefault();
        touchData.moveX = moveX;

        const now = navarManager.state.historys.length - 1;
        const nowHis = navarManager.state.historys[now];
        const lastHis = navarManager.state.historys[now - 1];
        if (nowHis && nowHis.update) {
          nowHis.update({
            gesturing: true,
            x: scope(changeX - navarManager.moveThreshold, 0, 1),
            y: 0,
            scale: 1,
            instant: true,
          });
        }
        if (lastHis && lastHis.update) {
          lastHis.update({
            gesturing: true,
            x: scope(
              (changeX - navarManager.moveThreshold) * navarManager.sinkRate - navarManager.sinkRate,
              -navarManager.sinkRate,
              0,
            ),
            y: 0,
            scale: 1,
            instant: true,
          });
        }
      }
    };

    const touchEnd = (event: any) => {
      if (!touchData.touchStarting) {
        return;
      }

      // event.preventDefault();
      const endX = getTouchX(event);
      const now = navarManager.state.historys.length - 1;
      const nowHis = navarManager.state.historys[now];
      const lastHis = navarManager.state.historys[now - 1];
      let isOut = false;
      if (endX - touchData.startX > 0.45) {
        isOut = true;
      } else if (endX - touchData.startX > 0.15 && Date.now() - touchData.startTime < 250) {
        isOut = true;
      }

      if (nowHis && nowHis.update) {
        nowHis.update({
          gesturing: false,
          x: isOut ? 1 : 0,
          y: 0,
          scale: 1,
          instant: false,
        });
      }
      if (lastHis && lastHis.update) {
        lastHis.update({
          gesturing: false,
          x: isOut ? 0 : -navarManager.sinkRate,
          y: 0,
          scale: 1,
          instant: false,
        });
      }
      if (isOut) {
        setTimeout(() => {
          navarManager.pop(true);
        }, navarManager.animeTime);
      }
      initTouchData();
    };

    const animeMove = (event: any) => {
      if (requestAnimationFrame) {
        requestAnimationFrame(() => touchMove(event));
      } else {
        touchMove(event);
      }
    };

    addListenResture(touchStart, animeMove, touchEnd);

    return () => {
      removeListenResture(touchStart, animeMove, touchEnd);
    };
  }, []);

  return <navarManager.ctx.Provider value={state}>{children}</navarManager.ctx.Provider>;
};
