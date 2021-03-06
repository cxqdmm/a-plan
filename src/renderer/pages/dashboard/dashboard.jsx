import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createStore, useRedux, connect } from 'redux';
import { If, Else} from 'component/condition';
import { useMounted } from 'hooks';
import { hot } from 'react-hot-loader/root';


import NewProject from './component/newProject';
import PagePanel from './component/pagePanel';
import Dependency from './component/dependencyPanel';
import Terminal, { module as terminalModule } from './component/terminal';
import Button from 'component/button';
import ImgIcon from 'component/imgIcon';
import { Tooltip, Layout, Divider, Row, Col, Empty } from 'antd';
import './index.module.less';

import DataModule from './module';

import controller from './controller';
const { Header, Footer, Content } = Layout;

const store = createStore(React.createContext(), DataModule)

function Dashboard(props) {
  const [logVisible, setLogVisible] = useState(false);

  function switchLog() {
    return () => setLogVisible(!logVisible);
  }
  useMounted(() => {
    DataModule.init();
  })
  useEffect(() => {
    DataModule.project.dir && terminalModule.runShell([`cd ${DataModule.project.dir}`])
  }, [DataModule.project.dir])
  return (
    <div styleName="root">
      <Terminal visible={logVisible} projectPath={DataModule.project.dir} onClose={switchLog()}/>
      <Layout styleName="layout">
        <Header styleName="header">
          <div className="flex align-center flex-1">
            <ImgIcon size="middle" src={require('static/images/icon-project.png')} />
            <ProjectName><span>{DataModule.project.name}</span></ProjectName>
            <Divider type="vertical" />
            <Tooltip placement="bottom" title="在vscode中打开">
              <Button type="light" shape="round" size="small" icon="edit" onClick={() => { controller.openInVscode() }}>编译器</Button>
            </Tooltip>
            <Tooltip placement="bottom" title="日志">
              <Button type="light" style={{ marginLeft: 10 }} shape="round" size="small" icon="code" onClick={switchLog()}>日志</Button>
            </Tooltip>
            <Tooltip placement="bottom" title="运行">
              <Button type="light" style={{ marginLeft: 10 }} shape="round" size="small" icon="chrome" onClick={() => terminalModule.runShell([`cd ${DataModule.project.dir}`, 'npm run start'])}>启动调试</Button>
            </Tooltip>
            <Divider type="vertical" />
          </div>
          <NewProject />
        </Header>
        <Content styleName="body">
          <If value={!!DataModule.project.dir}>
            <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
              <Col xs={12}>
                <PagePanel title="页面" pages={DataModule.pages} />
              </Col>
              <Col xs={12}>
                <Dependency
                  title="依赖"
                  dep={DataModule.dependency}
                  update={() => { }}
                />
              </Col>
            </Row>
          </If>
          <Else>
            <Empty />
          </Else>
        </Content>
        <Footer styleName="footer">
        </Footer>
      </Layout>
    </div>
  )
}
export {DataModule as module}
export default useRedux(store)(hot(connect(DataModule)(Dashboard)));

const ProjectName = styled.div`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  user-select: none;
  font-size: 16px;
  margin-left: 10px;
  white-space: nowrap;
`