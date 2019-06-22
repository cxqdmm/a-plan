import { observable } from 'redux';

class Module {
  @observable shell = '';
  @observable waiting = 1;
  runShell(shell) {
    this.setState({
      shell: shell,
      waiting: this.waiting + 1,
    })
  }
}

export default new Module();
