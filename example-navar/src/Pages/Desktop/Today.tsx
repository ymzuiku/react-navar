import { cssin } from 'cssin';
import * as React from 'react';

import { AppStoreCard } from '../../components/AppStoreCard';
import { changeStatusBarDart } from '../../utils/changeStatusBar';

import { todayData } from './todayData';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Today: React.FC<IProps> = () => {
  const handleOnScroll = React.useCallback((e: any) => {
    if (e.target.scrollTop > 160) {
      changeStatusBarDart(false);
    } else {
      changeStatusBarDart(true);
    }
  }, []);

  return (
    <div onScroll={handleOnScroll} className={cssin('overflow:auto; w:100%; h:100vh;')}>
      <div className={cssin('h:--24;')} />
      <div className={cssin('h:--4;')} />
      {todayData.map((v, i) => {
        return <AppStoreCard key={i} {...v} />;
      })}
      <div className={cssin('h:--32:')} />
    </div>
  );
};
