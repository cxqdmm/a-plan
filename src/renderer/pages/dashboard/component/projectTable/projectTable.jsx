import React from 'react';
import { Table, Button } from 'antd';
import { createStore, useRedux, connect } from 'redux';
import DataModule from './module';
import moment from 'moment';
import { hot } from 'react-hot-loader/root';
import { open } from 'util/vscode';
const store = createStore(React.createContext(), DataModule)


function ProjectTable(props) {
  const columns = [
    {
      title: '项目名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '路径',
      dataIndex: 'dir',
      key: 'dir',
    },
    {
      title: '修改日期',
      dataIndex: 'today',
      key: 'today',
      render: text => <span>{moment(text).format("YYYY-MM-DD HH:mm:ss")}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render:  (text, record) => (
        <span>
          <Button type="link" onClick={() => open(record.dir + '/' + record.name)}>打开项目</Button>
        </span>
      ),
    },
  ];
  
  
  return (
    <Table 
      className={props.className}
      // size="small"
      bordered={true}
      columns={columns} 
      dataSource={DataModule.projectList} 
    />
  )
}

export { DataModule }
export default useRedux(store)(hot(connect(DataModule)(ProjectTable)));