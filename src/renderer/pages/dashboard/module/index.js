import { observable } from 'redux';
import nedb from 'util/nedb';
import { getTemplate } from 'util/common';
import ctrl from '../controller';

class Module {
  nedb = nedb;
  @observable project = {}
  @observable templates = []
  @observable pages = []
  setEditProject(project = {}) {
    ctrl.setEditProject(project);
    this.setState({
      project: project,
    })
  }

  // 模块初始化
  async init() {
    const templates = getTemplate();
    const project = await ctrl.getProject();
    const pages = ctrl.getPages();
    this.setState({
      templates: templates,
      project: project,
      pages: pages,
    })
  }
}
export default new Module();
