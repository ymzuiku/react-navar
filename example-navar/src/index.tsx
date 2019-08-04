import { Plugins } from '@capacitor/core';
import { coverAttribute } from 'cssin';
import 'cssin/commonCSSValues';
import 'cssin/commonSheets';
import React from 'react';
import ReactDOM from 'react-dom';

import { NavarController } from './navar';
import * as Pages from './Pages';
const { SplashScreen } = Plugins;

const App: React.FC = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavarController defaultPath="Desktop">
      {Object.keys(Pages).map((k: any) => {
        const Comp = (Pages as any)[k];

        return <Comp key={k} />;
      })}
    </NavarController>
  );
};

coverAttribute('inlist');

ReactDOM.render(<App />, document.getElementById('root'));
