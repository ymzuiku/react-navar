export interface IPos {
  scale: number;
  x: number;
  y: number;
}

export interface IScroll {
  left: number;
  top: number;
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
  name: ILifeName;
  now: IPos;
  option?: any;
  path: string;
  to: IPos;
}

export interface IState {
  historys: IHistory[];
}
