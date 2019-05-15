import React from 'react';
import './App.less';
import { routerConfig, RouteWithSubRoutes } from './route';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      {
        routerConfig.map(route => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))
      }
    </Router>
  );
}

export default App;
