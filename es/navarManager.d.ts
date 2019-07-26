import * as React from 'react';
import { IState } from './navar.interface';
interface IManager {
    animeTime: number;
    ctx: React.Context<IState>;
    moveThreshold: number;
    sinkRate: number;
    startArea: number;
    state: IState;
    listen(fn: (state: IState) => any): any;
    pop(instant?: boolean): any;
    push(path: string, option?: any): any;
    replace(path: string, option?: any): any;
    setState(s: IState): any;
}
export declare const navarManager: IManager;
export {};
