import React, { useState, useEffect } from 'react';
import { Tabs, Icon, Tooltip } from 'antd';
import styled from 'styled-components';
import Button from 'component/button';
import { If, ElseIf, Else } from 'component/condition';
import { terminalModule } from '../terminal'
const { TabPane } = Tabs;
const fs = require('fs');

const OperationWrap = styled.div`
  flex: 0;
  white-space: nowrap;
`
function Operation(props) {
  const item = props.item;
  const [installing, setInstalling] = useState(false);
  useEffect(() => {
    if (installing) {
      console.log('安装中')
      let timer = setInterval(() => {
        console.log('检查')
        if (fs.existsSync(item.path)) {
          clearInterval(timer);
          item.installed = true;
          setInstalling(false);
        }
      },1000)
    }
  }, [installing])
  return (
    <OperationWrap >
      <If value={installing}>
        <Icon type="sync" spin />
      </If>
      <ElseIf value={!item.installed}>
        <Button type="light" size="small" onClick={() => {
          if (item.type === 'dependency') {
            terminalModule.runShell([`npm install ${item.name}@${item.value}`])
          } else {
            terminalModule.runShell([`npm install ${item.name}@${item.value} -D`])
          }
          setInstalling(true);
        }}>安装</Button>
      </ElseIf>
      <Else>
        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a"/>
      </Else>
    </OperationWrap>
  )
}

function DepList(props) {
  return props.data ? props.data.map((item, key) => {
    return (
      <Li key={item.name}>
        <Indication>
          <If value={!item.installed}>
            <Tooltip placement="left" title="该依赖没有安装">
              <Icon type="exclamation-circle" theme="twoTone" twoToneColor="red" />
            </Tooltip>
          </If>
        </Indication>
        <Name>
          <span className="name">{item.name}</span>
          <span className="version">{item.value}</span>
        </Name>
        <Operation item={item} />
      </Li>
    )
  }) : null
}
export default function Dependency(props) {
  return (
    <Root>
      <Tabs defaultActiveKey="1" tabBarStyle={{ height: '50px', display: 'flex', alignItems: 'stretch', margin: 0 }}>
        <TabPane tab="dependencies" key="1" style={{ height: 300, overflowY: 'auto' }}>
          <DepList data={props.dep.dependencies}/>
        </TabPane>
        <TabPane tab="devDependencies" key="2" style={{ height: 300, overflowY: 'auto' }}>
          <DepList data={props.dep.devDependencies} />
        </TabPane>
      </Tabs>
    </Root>
  )
}

const Li = styled.div`
  position: relative;
  display: flex;
  margin-left: 30px;
  padding-right: 30px;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #F3F5F8;
`
const Indication = styled.div`
  position: absolute;
  left: -20px;
  top: 10px;
`
const Name = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  .version {
    font-size: 12px;
    color: #BDBDBD;
  }
`


const Root = styled.div`
  border-radius: 5px;
  background-color: #fff;
  .ant-tabs-nav .ant-tabs-tab {
    padding: 15px 16px;
  }
`