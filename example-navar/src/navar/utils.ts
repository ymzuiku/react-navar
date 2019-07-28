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

type IEvent = (event: any) => any;

export const getTouchX = (event: any, px?: boolean) => {
  if (px === true) {
    return isPc ? event.clientX : event.changedTouches[0].clientX;
  }

  return (isPc ? event.clientX : event.changedTouches[0].clientX) / window.innerWidth;
};

export const getTouchY = (event: any, px?: boolean) => {
  if (px === true) {
    return isPc ? event.clientY : event.changedTouches[0].clientY;
  }

  return (isPc ? event.clientY : event.changedTouches[0].clientY) / window.innerHeight;
};

export const getTouchStartX = (event: any, px?: boolean) => {
  if (px === true) {
    return isPc ? event.clientX : event.touches[0].clientX;
  }

  return (isPc ? event.clientX : event.touches[0].clientX) / window.innerWidth;
};

export const getTouchStartY = (event: any, px?: boolean) => {
  if (px === true) {
    return isPc ? event.clientY : event.touches[0].clientY;
  }

  return (isPc ? event.clientY : event.touches[0].clientY) / window.innerHeight;
};

export const addListenResture = (handleStart: IEvent, handleMove: IEvent, handleEnd: IEvent) => {
  if (isPc) {
    document.addEventListener('mousedown', handleStart);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
  } else {
    document.addEventListener('touchstart', handleStart);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleEnd);
  }
};

export const removeListenResture = (handleStart: IEvent, handleMove: IEvent, handleEnd: IEvent) => {
  if (isPc) {
    document.removeEventListener('mousedown', handleStart);
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleEnd);
  } else {
    document.removeEventListener('touchstart', handleStart);
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('touchend', handleEnd);
  }
};

export const scope = (v: number, a: number, b: number) => {
  if (v < a) {
    return a;
  }
  if (v > b) {
    return b;
  }

  return v;
};

const defCharts = [
  'abcdefghijklmnopqrstuvwxyz',
  'abcdefghijklmnopqrstuvwxyz0123456789',
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
];

export const randomString = (length = 12, type = 0) => {
  length = length || 32;
  //设置随机数范围
  const charts = defCharts[type];
  const maxPos = charts.length;
  let result = '';
  for (let i = 0; i < length - 1; i++) {
    //产生随机数方式
    result += charts.charAt(Math.floor(Math.random() * maxPos));
  }

  return result;
};
