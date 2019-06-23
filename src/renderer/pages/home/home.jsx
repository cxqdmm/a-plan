import React from 'react';

import {
  BrowserRouter,
  Switch 
} from 'react-router-dom'
import './home.module.less';
import Menu from 'component/menu/menu';
import { pageConfig, RouteWithSubRoutes } from 'root/route'



export default function Hooks(props) {
  return (
    <BrowserRouter>
      <div className="flex" styleName="root">
        <Menu pages={pageConfig}></Menu>
        <div className="flex-1">
          <Switch>
            {
              pageConfig.map(route => (
                <RouteWithSubRoutes key={route.path} {...route} />
              ))
            }
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}