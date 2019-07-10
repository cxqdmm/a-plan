import { observable } from 'redux';
import nedb from 'util/nedb';
import { getTemplate } from 'util/common';
import ctrl from '../controller';

class Module {
  nedb = nedb;
  @observable project = {}
  @observable templates = getTemplate()
  @observable pages = []
  @observable dependency = {}

  // 设置当前编辑的项目，初始化项目数据
  setEditProject(project = {}) {
    ctrl.setEditProject(project);
    this.init();
  }

  refreshPages() {
    const pages = ctrl.getPages();
    this.setState({
      pages: pages,
    })
  }

  refreshDependency() {
    const dependency = ctrl.refreshDependency();
    console.log(dependency);
    this.setState({
      dependency: dependency,
    })
  }

  // 模块初始化
  async init() {
    const project = await ctrl.getProject();
    const pages = ctrl.getPages();
    const dependency = ctrl.getDependency();
    this.setState({
      project: project,
      pages: pages,
      dependency: dependency,
    })
  }
}
export default new Module();
