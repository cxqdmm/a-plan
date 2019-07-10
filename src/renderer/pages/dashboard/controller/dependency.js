const fs = require('fs');
const path = require('path');


export default class Dependency {
  constructor({cwd = '', dependencies = [], devDependencies = []}) {
    this.cwd = cwd;
    this.dependencies = dependencies;
    this.devDependencies = devDependencies;
    this.addInstalledStatus();
  }
  checkInstalledStatus(path) {
    return fs.existsSync(path);
  }
  addInstalledStatus() {
    this.dependencies.forEach(item => {
      item.type = 'dependency';
      item.path = path.join(this.cwd,'node_modules', item.name);
      item.installed = this.checkInstalledStatus(item.path);
    });
    this.devDependencies.forEach(item => {
      item.type = 'devDenpendency';
      item.path = path.join(this.cwd,'node_modules', item.name);
      item.installed = this.checkInstalledStatus(item.path);
    });
  }

}