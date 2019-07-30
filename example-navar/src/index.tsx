import { coverAttribute } from 'cssin';
import 'cssin/commonSheets';
import 'cssin/commonValues';
import React from 'react';
import ReactDOM from 'react-dom';

import { NavarController } from './navar';
import * as Pages from './Pages';

// const camelCase = (key: string) => key.replace(/(\-[a-z])/g, (v) => v.toUpperCase().replace('-', ''));
// const findClasses = /(\.)(?!\d)([^\s\.,{\[>+~#:)]*)(?![^{]*})/.source;
// const findKeyframes = /(@\S*keyframes\s*)([^{\s]*)/.source;
// const ignoreComments = /(?!(?:[^*/]|\*[^/]|\/[^*])*\*+\/)/.source;

// const classRegex = new RegExp(findClasses + ignoreComments, 'g');
// const keyframesRegex = new RegExp(findKeyframes + ignoreComments, 'g');

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

coverAttribute('inlist');

ReactDOM.render(<App />, document.getElementById('root'));
