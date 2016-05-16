import * as React from 'react';
import * as ReactDOM from 'react-dom';
// format is a pure js file
import format from './helpers';
// util is a ts file
import { Test1 } from './util';

console.log(format(new Test1().message))

// hello tsx is a typescript react file
import HelloTsx from './components/HelloTsx';

// hello jsx is a standard jsx file
import HelloJsx from './components/HelloJsx';


ReactDOM.render(
    <div>
        <HelloTsx compiler={'tsc'} framework='React' />
        <HelloJsx compiler={'babel'} framework='React' />
    </div>,
    document.getElementById('example')
);
