import React, { useState } from 'react';
import styled from 'styled-components';
import { createStore, useRedux } from 'redux';
import { useMounted } from 'hooks';

import DataModule from './module';

import NewProject from './component/newProject';
import Terminal, { terminalModule } from './component/terminal';
import Button from 'component/button';
import ImgIcon from 'component/imgIcon';
import { Tooltip, Layout } from 'antd';
import { open, } from 'util/vscode';
import './index.module.less';
const { Header, Footer, Content } = Layout;

const store = createStore(React.createContext(), DataModule)

function Dashboard(props) {
  const [logVisible, setLogVisible] = useState(false);

  function switchLog() {
    return () => setLogVisible(!logVisible);
  }
  useMounted(() => {
    DataModule.getEditProjectFromCache();
  })

  return (
    <div styleName="root">
      <Terminal styleName={`terminal ${!logVisible ? 'hide' : ''}`} />
      <Layout styleName="layout">
        <Header styleName="header">
          <div className="flex align-center flex-1">
            <ImgIcon size="large" src={require('static/images/icon-project.png')} />
            <ProjectName><span>{DataModule.project.name}</span></ProjectName>
            <Tooltip placement="bottom" title="在vscode中打开">
              <Button type="link" size="small" icon="edit" onClick={() => { open(DataModule.project.dir) }}>编译器</Button>
            </Tooltip>
            <Tooltip placement="bottom" title="日志">
              <Button type="link" size="small" icon="code" onClick={switchLog()}>日志</Button>
            </Tooltip>
            <Tooltip placement="bottom" title="运行">
              <Button type="link" size="small" icon="chrome" onClick={() => terminalModule.runShell([`cd ${DataModule.project.dir}`, 'npm run start'])}>启动调试</Button>
            </Tooltip>
          </div>
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

const ProjectName = styled.div`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  user-select: none;
  font-size: 20px;
  margin-left: 10px;
  white-space: nowrap;
`