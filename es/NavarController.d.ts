import * as React from 'react';
interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: any;
    defaultPath: string;
}
export declare const NavarController: React.FC<IProps>;
export {};
