import { observable } from 'redux';

class Module {
  @observable projectList = [];
  setList(list) {
    this.setState({
      projectList: list,
    })
  }
}

export default new Module();
