import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ContextExample from './ContextExample';
import PropsExample from './PropsExample';
import RefExample from './RefExample';
import Parent from './Children'
import LazyLoading from './LazyLoadingExample'
import RoutingSample from './RoutingSample'

ReactDOM.render(<RoutingSample />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
