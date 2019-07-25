import React from 'react';
import ReactDOM from 'react-dom';

import { NavarController } from './navar';
import { Desktop } from './Page/Desktop';
import { SubPage } from './Page/SubPage';

const App: React.FC = () => {
  return (
    <NavarController defaultPath="Desktop">
      <Desktop />
      <SubPage />
    </NavarController>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
