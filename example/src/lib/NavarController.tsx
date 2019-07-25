import * as React from 'react';

import * as device from './device';
import { IState } from './navar.interface';
import { navarManager } from './navarManager';
import * as utils from './utils';

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
    leftMoveToRight: false,
    startX: 0,
    move: 0,
    endX: 0,
  });

  React.useLayoutEffect(() => {
    navarManager.setState = setState;
  }, []);

  React.useEffect(() => {
    const touchStart = (event: any) => {
      if (device.isWechat || navarManager.state.historys.length === 1) {
        return;
      }
      const startXPx = utils.getTouchStartX(event, true);
      const startX = utils.getTouchStartX(event);

      if (startXPx < 150) {
        touchData.leftMoveToRight = true;
        touchData.startX = startX;
        touchData.startTime = Date.now();
      }
    };
    const touchMove = (event: any) => {
      const moveX = utils.getTouchX(event);

      if (touchData.leftMoveToRight) {
        const now = navarManager.state.historys.length - 1;
        const nowHis = navarManager.state.historys[now];
        const lastHis = navarManager.state.historys[now - 1];
        if (nowHis && nowHis.update) {
          nowHis.update({
            gesturing: true,
            x: moveX - touchData.startX,
            y: 0,
            scale: 1,
            instant: true,
          });
        }
        if (lastHis && lastHis.update) {
          lastHis.update({
            gesturing: true,
            x: (moveX - touchData.startX) * navarManager.sinkRate - navarManager.sinkRate,
            y: 0,
            scale: 1,
            instant: true,
          });
        }
      }
    };

    const touchEnd = (event: any) => {
      const endX = utils.getTouchX(event);

      if (touchData.leftMoveToRight) {
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

          touchData.leftMoveToRight = false;
          touchData.startX = 0;
          touchData.move = 0;
          touchData.endX = 0;
          touchData.startTime = 0;
        }
        if (isOut) {
          setTimeout(() => {
            navarManager.pop(true);
          }, navarManager.animeTime);
        }
      }
    };

    const animeMove = (event: any) => {
      if (requestAnimationFrame) {
        requestAnimationFrame(() => touchMove(event));
      } else {
        touchMove(event);
      }
    };

    utils.addListenResture(touchStart, animeMove, touchEnd);

    return () => {
      utils.removeListenResture(touchStart, animeMove, touchEnd);
    };
  }, []);

  return <navarManager.ctx.Provider value={state}>{children}</navarManager.ctx.Provider>;
};
