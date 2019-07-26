declare type IEvent = (event: any) => any;
export declare const getTouchX: (event: any, px?: boolean) => any;
export declare const getTouchY: (event: any, px?: boolean) => any;
export declare const getTouchStartX: (event: any, px?: boolean) => any;
export declare const getTouchStartY: (event: any, px?: boolean) => any;
export declare const addListenResture: (handleStart: IEvent, handleMove: IEvent, handleEnd: IEvent) => void;
export declare const removeListenResture: (handleStart: IEvent, handleMove: IEvent, handleEnd: IEvent) => void;
export declare const scope: (v: number, a: number, b: number) => number;
export {};
