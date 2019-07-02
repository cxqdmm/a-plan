import React, { useState } from 'react';

import { createStore, useRedux } from 'redux';
import DataModule from './module';
import { useMounted } from 'hooks';
import NewProject from './component/newProject/newProject';
import Terminal from './component/terminal/terminal';
import ProjectHeader from './component/projectHeader/projectHeader';
import CModal from 'component/modal/modal';

import { Button, Tooltip, Layout } from 'antd';
import { open } from 'util/vscode';
import './index.module.less';
const { Header, Footer, Content } = Layout;

const store = createStore(React.createContext(), DataModule)

function Dashboard(props) {
  const [logVisible, setLogVisible] = useState(false);

  function switchLog(visible) {
    return () => setLogVisible(visible);
  }
  useMounted(() => {
    DataModule.getEditProjectFromCache();
  })

  return (
    <div>
      <CModal 
        visible={logVisible} 
        onClickMask={switchLog(false)}
        >
          <Terminal />
      </CModal>
      <Layout styleName="layout">
        <Header styleName="header">
          <ProjectHeader>
            <Tooltip placement="bottom" title="在vscode中打开">
              <Button type="link" onClick={() => {open(DataModule.project.dir)}}>编译器</Button>
            </Tooltip>
            <Tooltip placement="bottom" title="日志">
              <Button type="link" onClick={switchLog(true)}>日志</Button>
            </Tooltip>
          </ProjectHeader>
          <NewProject />
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