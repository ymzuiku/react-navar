import React from 'react';
import ReactDOM from 'react-dom';

import { NavarController } from './lib';
import * as Pages from './Pages';
import './tailwind.auto.css';

const App: React.FC = () => {
  return (
    <NavarController defaultPath="Desktop">
      {Object.keys(Pages).map((k: any) => {
        const Comp = (Pages as any)[k];

        return <Comp key={k} />;
      })}
    </NavarController>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
