const fs = require('fs');
const path = require('path');

function sort(list) {
  let out = [];
  for(let i = 0; i < list.length; i++) {
    if (!list[i].installed) {
      out.unshift(list[i]);
    } else {
      out.push(list[i]);
    }
  }
  return out;
}

export default class Dependency {
  constructor({cwd = '', dependencies = [], devDependencies = []}) {
    this.cwd = cwd;
    this.dependencies = dependencies;
    this.devDependencies = devDependencies;
    this.init();
  }
  checkInstalledStatus(path) {
    return fs.existsSync(path);
  }
  init() {
    this.dependencies.forEach(item => {
      item.type = 'dependency';
      item.path = path.join(this.cwd,'node_modules', item.name);
      item.installed = this.checkInstalledStatus(item.path);
    });
    this.dependencies = sort(this.dependencies);
    this.devDependencies.forEach(item => {
      item.type = 'devDenpendency';
      item.path = path.join(this.cwd,'node_modules', item.name);
      item.installed = this.checkInstalledStatus(item.path);
    });
    this.devDependencies = sort(this.devDependencies);
  }

}