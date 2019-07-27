import * as React from 'react';

import { Navar } from '../../lib';

import { DesktopTabbar } from './DesktopTabbar';
import { Today } from './Today';
interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Hello: React.FC<IProps> = () => {
  return (
    <Navar path="Desktop" renderFloat={DesktopTabbar}>
      <Today />
    </Navar>
  );
};
