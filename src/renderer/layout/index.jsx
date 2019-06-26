import React from 'react';

import {
  Redirect,
  HashRouter,
  Route,
  Switch 
} from 'react-router-dom'
import './layout.module.less';
import Menu from './menu/menu';
import loadable from '@loadable/component'
import pageConfig from '../pageConfig';
function getComponent(page) {
  return loadable(() => import(/* webpackChunkName:"[request]" */`../pages/${page}/${page}`))
}


export default function Layout(props) {
  return (
    <HashRouter>
      <div className="flex" styleName="root">
        <Menu pages={pageConfig}></Menu>
        <div className="flex-1">
          <Switch>
                {pageConfig.map((item, index) => {
                  return item.component ? (
                    <Route
                      key={index}
                      path={item.path}
                      component={getComponent(item.component)}
                      exact={item.exact}
                    />
                  ) : null;
                })}

                <Redirect exact from="/" to="/dashboard" />
              </Switch>
        </div>
      </div>
    </HashRouter>
  );
}