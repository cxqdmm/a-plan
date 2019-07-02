import { observable } from 'redux';
import nedb from 'util/nedb' ;
import { getTemplate } from 'util/common';
const db = nedb.createDb({
  filename: 'store/dashboard/project',
  autoload: true,
})

class Module {
  nedb = nedb;
  @observable project = {}
  @observable templates = []
  setEditProject(project) {
    if (!this.project.name) {
      db.insert({
        type: 'editProject',
        name: project.name,
        dir: project.dir,
      })
    } else {
      db.update({type: 'editProject'}, {
        name: project.name,
        dir: project.dir,
      })
    }
    this.setState({
      project: project,
    })
  }
  async getEditProjectFromCache() {
    let doc;
    doc = await db.find({type: 'editProject'});
    this.setEditProject(doc[0] || {});
  }
  getTemplate() {
    const templates = getTemplate();
    this.setState({
      templates: templates,
    })
  }
}
export default new Module();
