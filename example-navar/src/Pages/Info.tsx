import * as React from 'react';

import { AppStoreCard } from '../components/AppStoreCard';
import { Icon } from '../components/Icon';
import { cssin } from '../cssin';
import { IHistory, INavarProps, Navar, navarManager } from '../navar';
import { Consumer } from '../store';

interface IProps extends INavarProps {}

export const Info: React.FC<IProps> = ({}) => {
  return (
    <Consumer memo={(s) => [s.info.params]}>
      {([params]: [any]) => {
        return (
          <Navar path="Info">
            {params && <AppStoreCard {...params} full={true} />}
            {params && (
              <div className={cssin`dis=block absolute! top! right!`} onClick={navarManager.pop}>
                <div className={cssin`h=--top-safe`} />
                <Icon
                  className={cssin`opacity=0.7 w=--8 h=--8 m=--4 ${params.dark ? 'color=--white' : 'color=--black'}`}
                  link="iconclose2"
                />
              </div>
            )}
            {params && <p className={cssin`p=--6`}>{params.text}</p>}
            {params && <p className={cssin`p=--6`}>{params.text}</p>}
          </Navar>
        );
      }}
    </Consumer>
  );
};
