import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Row, Col, Button } from 'antd';
import Card from 'component/card';
import { createStore, useRedux, connect } from 'redux';
import { useMounted } from 'hooks';
import DataModule from './module';
import { open } from 'util/vscode';
import nedb from 'util/nedb';
import './index.module.less';
const store = createStore(React.createContext(), DataModule)


let db;
function ProjectTable(props) {
  useMounted(() => {
    let doc;
    const fun = async () => {
      db = nedb.get('store/dashboard/project');
      doc = await db.find({type: 'project'});
      DataModule.setList(doc || []);
    };
    fun();
  })

  return (
    <Card className={props.className}>
      <Card.Header>
        项目列表
      </Card.Header>
      <Card.Body>
        {
          DataModule.projectList.map((item, key) => {
            return <ListItem key={key} {...item} selectProject={() => {props.selectProject(item)}}/>
          })
        }
      </Card.Body>

    </Card>
  
  )
}

function ListItem(props) {
  return <Row type="flex" align="middle" style={{padding: '5px 0', cursor: 'pointer'}}>
  <Col span={12} order={1}>
    <span styleName="btn-default hover" onClick={() => props.selectProject()}>{props.name}</span>
  </Col>
  <Col span={12} order={2}>
    <Button type="link" onClick={() => open(props.dir)}>vscode</Button>
  </Col>
</Row>
}

export { DataModule }
export default useRedux(store)(hot(connect(DataModule)(ProjectTable)));