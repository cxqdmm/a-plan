import { observable } from 'redux';

class Module {
  @observable project = {}
  setEditProject(project) {
    this.setState({
      project: project,
    })
  }
}
export default new Module();
