import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Button, Descriptions, Badge, Row, Col, Input, Icon } from 'antd';
import { ipcRenderer } from 'electron';
import useMounted from 'hooks/useMounted';
import {  terminalModule as terminal } from '../terminal';
import ProjectTable from '../projectTable';
import ProjectTemplate from '../projectTemplate';
import CModal from 'component/modal';
import Step from 'component/step';
import nedb from 'util/nedb';
import dashboardModule from '../../module';

import './index.module.less';
const StepView = Step.StepView;
let db;
function NewProject() {
  const [visible, setVisible] = useState(false);
  const [isShowModal, setModalVisible] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectDir, setProjectDir] = useState('');
  useMounted(() => {
    db = nedb.get('store/dashboard/project');
    dashboardModule.getTemplate();
    ipcRenderer.on('selectDir',(event,value) => {
      setProjectDir(value);
    })
  })
  const startGenerateProject = () => {
    db.insert({
      type: 'project',
      name: projectName,
      dir: projectDir + '/' + projectName,
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
  function closeLeftModal() {
    setModalVisible(false);
  }
  function selectProject(project) {
    dashboardModule.setEditProject(project);
    closeLeftModal();
  }
  const showDialogCreate = () => {
    setVisible(true);
    setProjectDir('');
    setProjectName('');
  } 
  const showProjectList = () => {
    setModalVisible(true);
  }
  function stepChange(step) {
    console.log(step)
    return true;
  }
  return (
    <div>
      <Button 
        type="primary" 
        shape="round"
        onClick={showProjectList}
        >项目管理</Button>
      <CModal 
        visible={isShowModal}
        type="right" 
        onClickMask={closeLeftModal}
        >
        <div styleName="project">
          <Button 
          styleName="btn-new"
          type="primary" 
          shape="round"
          icon="plus"
          onClick={showDialogCreate}
          >创建项目</Button>
          <ProjectTable selectProject={selectProject}></ProjectTable>
        </div>
      </CModal>
      <CModal
        visible={visible}
        onClickMask={handleCancel}
        >
          <Step
            style={{width: 500, height: 400}}
            onClick={stepChange}
            >
            <StepView id="step-1">
              <ProjectTemplate templates={dashboardModule.templates}/>
            </StepView>
            <StepView id="step-2">
              <div styleName="center">
                <Descriptions bordered>
                  <Descriptions.Item label="项目名" span={3}>
                    <Input value={projectName} onChange={e =>
                        setProjectName(e.target.value)}></Input>
                  </Descriptions.Item>
                  <Descriptions.Item label="路径" span={3}>
                    <Input addonAfter={<Icon type="folder" onClick={() => ipcRenderer.send('open-directory-dialog','openDirectory')}/>} value={projectDir} />
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </StepView>
          </Step>
      </CModal>
    </div>
  )
}
export default hot(NewProject);