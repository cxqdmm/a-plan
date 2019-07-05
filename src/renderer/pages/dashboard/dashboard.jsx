import React, { useState } from 'react';
import styled from 'styled-components';
import { createStore, useRedux } from 'redux';
import { useMounted } from 'hooks';

import DataModule from './module';

import NewProject from './component/newProject';
import Terminal from './component/terminal';
import Button from 'component/button';
import ImgIcon from 'component/imgIcon';
import { Tooltip, Layout } from 'antd';
import { open } from 'util/vscode';
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
            <ProjectName>{DataModule.project.name}</ProjectName>
            <Tooltip placement="bottom" title="在vscode中打开">
              <Button type="link" onClick={() => { open(DataModule.project.dir) }}>编译器</Button>
            </Tooltip>
            <Tooltip placement="bottom" title="日志">
              <Button type="link" onClick={switchLog()}>日志</Button>
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

const ProjectName = styled.span`
  font-weight: 600;
  user-select: none;
  font-size: 24px;
  margin-left: 10px;
`