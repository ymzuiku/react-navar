import * as React from 'react';

import { isPc } from './device';

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
