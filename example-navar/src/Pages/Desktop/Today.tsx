import { Plugins, StatusBarStyle } from '@capacitor/core';
import * as React from 'react';

import { AppStoreCard } from '../../components/AppStoreCard';
import { Cell } from '../../components/Cell';
import { Memo } from '../../components/Memo';
import { cssin } from '../../cssin';
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
    <div onScroll={handleOnScroll} className={cssin('overflow=auto w=100% h=100vh')}>
      <div className={cssin('h=--24')} />
      <div className={cssin('h=--4')} />
      {todayData.map((v, i) => {
        return <AppStoreCard key={i} {...v} />;
      })}
      <div className={cssin('h=--32')} />
    </div>
  );
};
