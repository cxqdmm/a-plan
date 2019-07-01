import React from 'react';
import nedb from 'util/nedb' 

import { createStore, useRedux } from 'redux';
import DataModule from './module';

import NewProject from './component/newProject/newProject';
import Terminal from './component/terminal/terminal';
import { Layout } from 'antd';

import './index.module.less';
const { Header, Footer, Content } = Layout;

const store = createStore(React.createContext(), DataModule)
nedb.createDb({
  filename: 'store/dashboard/project',
  autoload: true,
})

function Dashboard(props) {
  return (
    <Layout styleName="layout">
      <Header styleName="header">
        <NewProject></NewProject>
      </Header>
      <Content>

      </Content>
      <Footer styleName="footer">
        <Terminal></Terminal>
      </Footer>
    </Layout>
  )
}
export default useRedux(store)(Dashboard);