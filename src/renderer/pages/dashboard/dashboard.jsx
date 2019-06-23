import React from 'react';
import nedb from 'util/nedb' 

import { createStore, useRedux } from 'redux';
import DataModule from './module';

import NewProject from './component/newProject/newProject';
import Terminal from './component/terminal/terminal';
import ProjectTable from './component/projectTable/projectTable';

import './index.module.less';

const store = createStore(React.createContext(), DataModule)
nedb.createDb({
  filename: 'store/dashboard/project',
  autoload: true,
})

function Dashboard(props) {
  return (
    <div styleName="root">
      <div styleName="body">
        <NewProject></NewProject>
        <ProjectTable styleName="project"></ProjectTable>
      </div>
      <div styleName="footer">
        <Terminal></Terminal>
      </div>
    </div>
  )
}
export default useRedux(store)(Dashboard);