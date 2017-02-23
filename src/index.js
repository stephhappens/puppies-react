import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { Router, Route, hashHistory } from 'react-router';
import PuppiesIndex from './components/puppies-index';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="puppies" component={PuppiesIndex}>
        {/* <Route path="puppies-detail" component={puppies-detail}>
        </Route> */}
    </Route>
  </Route>
</Router>


), document.body)

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
