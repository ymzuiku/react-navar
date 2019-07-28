import React from 'react';
import ReactDOM from 'react-dom';

import { setMatchs, setValues } from './cssin';
import { commonMatchs } from './cssin/commonMatchs';
import { commonValues } from './cssin/commonValues';
import './index.css';
import { NavarController } from './navar';
import * as Pages from './Pages';
import './tailwind.auto.css';

console.time('xxx');
setMatchs(commonMatchs);
setValues(commonValues);
console.timeEnd('xxx');

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

ReactDOM.render(<App />, document.getElementById('root'));
