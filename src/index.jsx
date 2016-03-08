require('./index.html');
require('_styles/common.scss');

import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import ReactDOM from 'react-dom';

import App from './App';
import Dashboard from '_pages/Dashboard';
import Spitfire from '_pages/Spitfire';
import Transfer from '_pages/Transfer';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render((
  <Router history={appHistory}>
    <Route path='/spitfire' component={Spitfire}/>
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard} />
      <Route path='transfer' component={Transfer}/>
      <Route path='*' component={Dashboard}/>
    </Route>
  </Router>
), document.getElementById('app'));
