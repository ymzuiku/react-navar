const ua = navigator.userAgent;
export const isAndroid = /(?:Android)/.test(ua);
// const isAndroid = true;
export const isFireFox = /(?:Firefox)/.test(ua);
export const isChrome = /(?:Chrome|CriOS)/.test(ua);
export const isTablet =
  /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua));
export const isPhone = /(?:iPhone)/.test(ua) && !isTablet;
export const isWechat = /MicroMessenger/.test(ua);
export const isPc = !isPhone && !isAndroid;
export const isLow = false;

// iPhone X、iPhone XS
export const isIPhoneX =
  /iphone/gi.test(window.navigator.userAgent) &&
  window.devicePixelRatio &&
  window.devicePixelRatio === 3 &&
  window.screen.width === 375 &&
  window.screen.height === 812;

// iPhone XS Max
export const isIPhoneXSMax =
  /iphone/gi.test(window.navigator.userAgent) &&
  window.devicePixelRatio &&
  window.devicePixelRatio === 3 &&
  window.screen.width === 414 &&
  window.screen.height === 896;

// iPhone XR
export const isIPhoneXR =
  /iphone/gi.test(window.navigator.userAgent) &&
  window.devicePixelRatio &&
  window.devicePixelRatio === 2 &&
  window.screen.width === 414 &&
  window.screen.height === 896;

export const isNeedIPhoneSafe = isIPhoneX || isIPhoneXSMax || isIPhoneXR;

// 获取是否是 ios 或 android
export const isNative = !isWechat && !isPc && window.innerHeight > 722;

export const safeTop = isNeedIPhoneSafe ? 43 : 20;

export const safeBottom = isNeedIPhoneSafe ? 25 : 0;
