const fs = require('fs');
const path = require('path');


export default class Dependency {
  constructor({cwd = '', dependencies = [], devDependencies = []}) {
    this.cwd = cwd;
    this.dependencies = dependencies;
    this.devDependencies = devDependencies;
    this.addInstalledStatus();
  }
  checkInstalledStatus(dep) {
    return fs.existsSync(path.join(this.cwd,'node_modules', dep));
  }
  addInstalledStatus() {
    this.dependencies.forEach(item => {
      item.type = 'dependency'
      item.installed = this.checkInstalledStatus(item.name);
    });
    this.devDependencies.forEach(item => {
      item.type = 'devDenpendency'
      item.installed = this.checkInstalledStatus(item.name);
    });
  }

}