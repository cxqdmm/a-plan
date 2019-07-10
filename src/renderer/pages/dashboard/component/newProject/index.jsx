import React, { useState, useRef } from 'react';
import path from 'path';
import { ipcRenderer } from 'electron';
import { hot } from 'react-hot-loader/root';
// component
import { Input, Icon, message } from 'antd';
import ProjectTable from '../projectTable';
import ProjectTemplate from '../projectTemplate';
import ProjectForm from '../projectForm';
import CModal from 'component/modal';
import Step from 'component/step';
import Button from 'component/button';
// module
import { terminalModule as terminal } from '../terminal';
import dashboardModule from '../../module';
// hook
import useMounted from 'hooks/useMounted';
// others
import nedb from 'util/nedb';
import { templatePath } from 'util/env';
import { IpcEvent } from 'util/ipc';
import './index.module.less';
const StepView = Step.StepView;
let db;
const openFolderEvent = new IpcEvent({
  sendEventName:'open-directory-dialog',
  receiveEventName: 'selectDir'
})
function NewProject() {
  let projectRef = useRef();
  const [visible, setVisible] = useState(false);
  const [isShowModal, setModalVisible] = useState(false);
  const [template, setTemplate] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectDir, setProjectDir] = useState('');
  useMounted(() => {
    db = nedb.get('store/dashboard/project');
  })
  const startGenerateProject = () => {
    db.insert({
      type: 'project',
      name: projectName,
      template: template,
      dir: projectDir + '/' + projectName,
      today: new Date(),
    })
    terminal.runShell([
      `cd ${projectDir}`,
      `mkdir ${projectName}`,
      `cd ${projectName}`,
      `cp -r ${path.join(templatePath, template)}/* .`,
      'npm install',
      'git init',
    ]);
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
    setTemplate('');
    setProjectDir('');
    setProjectName('');
  }
  const showProjectList = () => {
    setModalVisible(true);
  }
  function stepChange(step) {
    if (step.from === 'step-1') {
      if (!template) {
        message.error('请选择一个项目模板');
        return false;
      }
    } else if (step.status === 'forward' && step.from === 'step-2') {
      if (projectRef.current.canSubmit()) {
        startGenerateProject();
        handleCancel();
      }
    }
    return true;
  }

  function selectFolder() {
    openFolderEvent.send('openDirectory').then(value => {
      setProjectDir(value);
    });
  }

  function openProject() {
    openFolderEvent.send('openDirectory').then(value => {
      const project = {
        type: 'project',
        name: value.split(/\/|\\/).pop(),
        dir: value,
        today: new Date(),
      }
      db.insert(project)
      selectProject(project);
    });
  }

  function selectTemp(temp) {
    setTemplate(temp);
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
          <div styleName="btn-group">
            <Button
              type="primary"
              shape="round"
              icon="plus"
              onClick={showDialogCreate}
            >创建项目</Button>
            <Button
              type="light"
              shape="round"
              icon="folder-open"
              onClick={openProject}
            >打开项目</Button>
          </div>
          <ProjectTable selectProject={selectProject}></ProjectTable>
        </div>
      </CModal>
      <CModal
        visible={visible}
        onClickMask={handleCancel}
      >
        <Step
          title="创建项目"
          style={{ width: 500, height: 400 }}
          onClose={handleCancel}
          onClick={stepChange}
        >
          <StepView id="step-1">
            <ProjectTemplate
              value={template}
              onSelect={selectTemp}
              templates={dashboardModule.templates}
            />
          </StepView>
          <StepView id="step-2">
            <div styleName="center">
              <ProjectForm ref={projectRef}>
                <span label="模板">{template}</span>
                <Input
                  label="项目名"
                  message="请输入项目名"
                  value={projectName}
                  onChange={e => setProjectName(e.target.value)} />
                <Input
                  label="路径"
                  message="请选择项目路径"
                  addonAfter={<Icon type="folder" onClick={selectFolder} />}
                  value={projectDir} />
              </ProjectForm>
            </div>
          </StepView>
        </Step>
      </CModal>
    </div>
  )
}
export default hot(NewProject);