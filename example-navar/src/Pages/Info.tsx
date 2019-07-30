import { cssin } from 'cssin';
import * as React from 'react';

import { AppStoreCard } from '../components/AppStoreCard';
import { Icon } from '../components/Icon';
import { INavarProps, Navar, navarManager } from '../navar';
import { Consumer } from '../store';
import { changeStatusBarDart } from '../utils/changeStatusBar';

interface IProps extends INavarProps {}

export const Info: React.FC<IProps> = ({}) => {
  const handleOnScroll = React.useCallback((e: any) => {
    if (e.target.scrollTop > 160) {
      changeStatusBarDart(false);
    } else {
      changeStatusBarDart(true);
    }
  }, []);

  return (
    <Consumer memo={(s) => [s.info.params]}>
      {([params]: [any]) => {
        return (
          <Navar path="Info">
            <div onScroll={handleOnScroll}>
              {params && <AppStoreCard {...params} full={true} />}
              {params && (
                <div className={cssin`dis:block; absolute; top; right;`} onClick={navarManager.pop}>
                  <div className={cssin`h:--top-safe;`} />
                  <Icon
                    className={cssin`opacity:0.7; w:--8; h:--8; m:--4; ${
                      params.dark ? 'color:--white;' : 'color:--black;'
                    }`}
                    link="iconclose2"
                  />
                </div>
              )}
              {params && <p className={cssin`p:--6;`}>{params.text}</p>}
              {params && <p className={cssin`p:--6;`}>{params.text}</p>}
            </div>
          </Navar>
        );
      }}
    </Consumer>
  );
};
