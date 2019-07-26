import * as React from 'react';
import { IHistory, ILayout, IPosAnime, IScroll } from './navar.interface';
export interface IChildProps {
    scroll: IScroll;
}
interface ILayoutParams {
    bottomHeight?: number;
    bottomSafe?: number;
    topHeight?: number;
    topSafe?: number;
}
export interface INavarFloatProps {
    anime: IPosAnime;
    history: IHistory;
    layout: ILayout;
    onScroll(event: any): any;
}
interface INavarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    layout?: ILayoutParams;
    nowPath?: string;
    path: string;
    renderFloat?(props: INavarFloatProps): any;
}
export declare const Navar: React.FC<INavarProps>;
export {};
