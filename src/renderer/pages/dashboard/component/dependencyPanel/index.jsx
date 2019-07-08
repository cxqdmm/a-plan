import React from 'react';
import { Tabs, Icon } from 'antd';
import styled from 'styled-components';
import Button from 'component/button';
const { TabPane } = Tabs;

function DepList(list) {
  return list ? list.map((item, key) => {
    return <Li key={key}>
      <Name>
        <span className="name">{item.name}</span>
        <span className="version">{item.value}</span>
      </Name>
      <Operation>
        <Button type="light" size="small" icon="delete" shape="round"></Button>
      </Operation>
    </Li>
  }) : null
}
export default function Dependency(props) {
  return (
    <Root>
      <Tabs defaultActiveKey="1" tabBarStyle={{height: '50px',display: 'flex' ,alignItems: 'stretch', margin: 0}}>
        <TabPane tab="dependencies" key="1" style={{ height: 300, overflowY: 'auto' }}>
          {
            DepList(props.dep.dependencies)
          }
        </TabPane>
        <TabPane tab="devDependencies" key="2" style={{ height: 300, overflowY: 'auto' }}>
          {
            DepList(props.dep.devDependencies)
          }
        </TabPane>
      </Tabs>
    </Root>
  )
}

const Li = styled.div`
  display: flex;
  margin-left: 30px;
  padding-right: 30px;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #F3F5F8;
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

const Operation = styled.div`
  flex: 0;
  white-space: nowrap;
`
const Root = styled.div`
  border-radius: 5px;
  background-color: #fff;
  .ant-tabs-nav .ant-tabs-tab {
    padding: 15px 16px;
  }
`