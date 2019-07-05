import React, { useState } from 'react';

import { createStore, useRedux } from 'redux';
import DataModule from './module';
import { useMounted } from 'hooks';

import { Layout } from 'antd';
import './index.module.less';
const { Header, Footer, Content } = Layout;

const store = createStore(React.createContext(), DataModule)

function Dashboard(props) {
  return (
    <div>
      <Layout styleName="layout">
        <Header styleName="header">

        </Header>
        <Content>

        </Content>
        <Footer styleName="footer">
        </Footer>
      </Layout>
    </div>
  )
}
export default useRedux(store)(Dashboard);