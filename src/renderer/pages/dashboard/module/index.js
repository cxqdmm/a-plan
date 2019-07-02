import { observable } from 'redux';
import nedb from 'util/nedb' 
const db = nedb.createDb({
  filename: 'store/dashboard/project',
  autoload: true,
})

class Module {
  nedb = nedb;
  @observable project = {}
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
    db.update({type: 'editProject'}, {
      name: project.name,
      dir: project.dir,
    }).catch(res => {
      db.insert({
        type: 'editProject',
        name: project.name,
        dir: project.dir,
      })
    })
  }
  async getEditProjectFromCache() {
    let doc;
    doc = await db.find({type: 'editProject'});
    this.setEditProject(doc[0] || {});
  }
}
export default new Module();
