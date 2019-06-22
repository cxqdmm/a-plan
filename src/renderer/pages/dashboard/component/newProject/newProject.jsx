import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Button, Modal, Row, Col, Input, Icon } from 'antd';
import { ipcRenderer } from 'electron';
import useMounted from 'hooks/useMounted';
import {  terminalModule as terminal } from '../terminal/terminal';
import {  DataModule as projectTable } from '../projectTable/projectTable';
import nedb from 'util/nedb';
let db;
function NewProject() {
  const [visible, setVisible] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectDir, setProjectDir] = useState('');
  useMounted(() => {
    let doc;
    const fun = async () => {
      db = nedb.get('store/dashboard/project');
      doc = await db.find({type: 'project'});
      projectTable.setList(doc || []);
      console.log('doc', doc)
    };
    fun();
    ipcRenderer.on('selectDir',(event,value) => {
      setProjectDir(value);
    })
  })
  const startGenerateProject = () => {
    db.insert({
      type: 'project',
      name: projectName,
      dir: projectDir,
      today: new Date(),
    })
    terminal.runShell([`cd ${projectDir}`, `npx create-react-app ${projectName}`]);
  }
  function handleOk () {
    setVisible(false);
    startGenerateProject();
  }
  function handleCancel() {
    setVisible(false);
  }
  const showDialogCreate = () => {
    setVisible(true);
    setProjectDir('');
    setProjectName('');
  } 
 
  return (
    <div>
      <Button 
        type="primary" 
        shape="round"
        icon="plus"
        onClick={showDialogCreate}
        >创建新项目</Button>
      <Modal
          title="创建新项目"
          okText="开始创建项目"
          cancelText="取消"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div>
          <Row gutter={16} style={{padding: 5}}>
            <Col span={4} style={{textAlign: 'right', lineHeight:'32px'}}>项目名</Col>
            <Col span={16}>
              <Input value={projectName} onChange={e =>
                setProjectName(e.target.value)}></Input>
            </Col>
          </Row>
          <Row gutter={16} style={{padding: 5}}>
            <Col span={4} style={{textAlign: 'right', lineHeight:'32px'}}>路径</Col>
            <Col span={16}>
              <Input addonAfter={<Icon type="folder" onClick={() => ipcRenderer.send('open-directory-dialog','openDirectory')}/>} value={projectDir} />
            </Col>
          </Row>
          </div>
      </Modal>
    </div>
  )
}
export default hot(NewProject);