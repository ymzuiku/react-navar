
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
    <div onScroll={handleOnScroll} inlist="overflow:auto; w:100%; h:100vh;">
      <div inlist="h:--24;" />
      <div inlist="h:--4;"/>
      {todayData.map((v, i) => {
        return <AppStoreCard key={i} {...v} />;
      })}
      <div inlist="h:--32:" />
    </div>
  );
};
