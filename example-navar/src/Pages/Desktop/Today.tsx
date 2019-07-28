import { Plugins, StatusBarStyle } from '@capacitor/core';
import * as React from 'react';

import { AppStoreCard } from '../../components/AppStoreCard';
import { Cell } from '../../components/Cell';
import { Memo } from '../../components/Memo';
import { useEvent } from '../../hooks';

import { todayData } from './todayData';

const { StatusBar } = Plugins;

let statusBarIsLight = false;

if (StatusBar && StatusBar.setStyle) {
  StatusBar.setStyle({
    style: StatusBarStyle.Light,
  });
}

const changeStatusBarDart = (isDart: boolean) => {
  if (statusBarIsLight !== isDart) {
    statusBarIsLight = isDart;
    if (StatusBar && StatusBar.setStyle) {
      StatusBar.setStyle({
        style: isDart ? StatusBarStyle.Light : StatusBarStyle.Dark,
      });
    }
  }
};

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
    <div onScroll={handleOnScroll} className="overflow-auto w-full h-vh">
      {/* <div className="h-top-safe fixed top-0 left-0 bg-gray-400 z-100" /> */}
      <div className="h-24" />
      <div className="h-4" />
      {todayData.map((v, i) => {
        return <AppStoreCard key={i} {...v} />;
      })}
      <div className="h-32" />
    </div>
  );
};
