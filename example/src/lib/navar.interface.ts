export interface IPos {
  scale: number;
  x: number;
  y: number;
}

export interface IPosAnime {
  gesturing: boolean;
  instant: boolean;
  scale: number;
  x: number;
  y: number;
}

export interface IScroll {
  left: number;
  top: number;
}

export interface ILayout {
  bottomHeight: number;
  bottomSafe: number;
  topHeight: number;
  topSafe: number;
  zIndex: number;
}

export interface ICssvar {
  '--navar-background-color'?: string;
  '--navar-mask-color'?: string;
  '--navar-transition'?: string;
}

export type ILifeName =
  | 'none'
  | 'push'
  | 'pop'
  | 'sinkDown'
  | 'sinkUp'
  | 'static'
  | 'dragXEnd'
  | 'dragXMove'
  | 'dragXBack'
  | 'dragXOut';

export interface IHistory {
  beginTime: number;
  from: IPos;
  index: number;
  name: ILifeName;
  now: IPos;
  option?: any;
  path: string;
  to: IPos;
  transition: string;
  update?(pos: IPosAnime): any;
}

export interface IState {
  historys: IHistory[];
}
