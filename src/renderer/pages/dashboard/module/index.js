import { observable } from 'redux';

class Module {
  @observable list = [1,2,3]
  add(goods) {
    let list = this.list;
    list.push(goods);
    this.setState({
      list: list,
    })
  }
  remove(index) {
    let list = this.list;
    list.splice(index, 1);
    this.setState({
      list: list,
    })
  }
}

export default new Module();
