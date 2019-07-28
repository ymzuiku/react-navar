import * as React from 'react';

import { AppStoreCard } from '../components/AppStoreCard';
import { Icon } from '../components/Icon';
import { IHistory, INavarProps, Navar, navarManager } from '../navar';
import { Consumer } from '../store';

interface IProps extends INavarProps {}

export const Info: React.FC<IProps> = ({}) => {
  return (
    <Consumer memo={(s) => [s.info.params]}>
      {([params]: [any]) => {
        return (
          <Navar layout={{ topSafe: 0 }} path="Info">
            {params && <AppStoreCard {...params} full={true} />}
            {params && (
              <div className="block absolute top-0 right-0" onClick={navarManager.pop}>
                <div className="h-top-safe" />
                <Icon
                  className={`opacity-70 w-8 h-8 m-4 ${params.dark ? 'text-white' : 'text-black'}`}
                  link="iconclose2"
                />
              </div>
            )}
            {params && <p className="p-6">{params.text}</p>}
            {params && <p className="p-6">{params.text}</p>}
          </Navar>
        );
      }}
    </Consumer>
  );

  return (
    <Consumer memo={(s) => [s.info.params]}>
      {([params]: [any]) => {
        return (
          <Navar layout={{ topSafe: 0 }} path="Info">
            {params && <AppStoreCard {...params} full={true} />}
            {params && (
              <div onClick={navarManager.pop}>
                <Icon
                  className={`absolute opacity-70 w-8 h-8 top-0 m-4 right-0 ${
                    params.dark ? 'text-white' : 'text-black'
                  }`}
                  link="iconclose2"
                />
              </div>
            )}
            {params && <p className="p-6">{params.text}</p>}
            {params && <p className="p-6">{params.text}</p>}
          </Navar>
        );
      }}
    </Consumer>
  );
};
