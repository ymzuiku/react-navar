import * as React from 'react';

import { AppStoreCard } from '../components/AppStoreCard';
import { Icon } from '../components/Icon';
import { INavarProps, Navar, navarManager } from '../navar';
import { Consumer } from '../store';
import { changeStatusBarDart } from '../utils/changeStatusBar';

import { InfoFloat } from './InfoFloat';

interface IProps extends INavarProps {}

export const Info: React.FC<IProps> = () => {
  const handleOnScroll = React.useCallback((e: any) => {
    if (e.target.scrollTop > 160) {
      changeStatusBarDart(false);
    } else {
      changeStatusBarDart(true);
    }
  }, []);

  return (
    <Consumer memo={s => [s.info.params]}>
      {([params]: [any]) => {
        return (
          <Navar path="Info" renderFloat={InfoFloat}>
            <div onScroll={handleOnScroll}>
              {params && <AppStoreCard {...params} full={true} />}
              {params && (
                <div
                  inlist="dis:block; absolute; top; right;"
                  onClick={navarManager.pop}
                >
                  <div inlist="h:--top-safe;" />
                  <Icon
                    inlist={`opacity:0.7; w:--8; h:--8; m:--4; ${
                      params.dark ? 'color:--white;' : 'color:--black;'
                    }`}
                    link="iconclose2"
                  />
                </div>
              )}
              {params && <p inlist="p:--6;">{params.text}</p>}
              {params && <p inlist="p:--6;">{params.text}</p>}
              <div inlist="h:--20;" />
            </div>
          </Navar>
        );
      }}
    </Consumer>
  );
};
