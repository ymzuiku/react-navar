import { Plugins, StatusBarStyle } from '@capacitor/core';

const { StatusBar } = Plugins;

let statusBarIsLight = false;

if (StatusBar && StatusBar.setStyle) {
  StatusBar.setStyle({
    style: StatusBarStyle.Light,
  });
}

export const changeStatusBarDart = (isDart: boolean) => {
  if (statusBarIsLight !== isDart) {
    statusBarIsLight = isDart;
    if (StatusBar && StatusBar.setStyle) {
      StatusBar.setStyle({
        style: isDart ? StatusBarStyle.Light : StatusBarStyle.Dark,
      });
    }
  }
};
