// 项目控制器模块
import { message } from 'antd';
import nedb from 'util/nedb';
import moment from 'moment';
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process')
const os = require('os');
/**
 * 负责管理当前项目
.
└── 功能点
    ├── 在vscode打开项目
    ├── 运行项目
    ├── 获取项目页面信息
    ├── 获取项目依赖包信息
    ├── 构建结果
    └── 关联git仓库

 */

class Project {
  constructor() {
    this.cache = new Map();
    this._project = {};
  }
  init(project) {
    if (this._project.dir !== project.dir) {
      this._project = project;
      this.cache.clear();
    }
  }
  get pages() {
    let pages = this.cache.get('pages')
    if (pages) {
      return pages;
    }
    const pageDir = path.resolve(this._project.dir,'src/pages');
    pages = fs.readdirSync(pageDir);
    const pageInfo = pages.reduce((out, page) => {
      const filepath = path.join(pageDir, page);
      const stats = fs.statSync(filepath);
      stats.name = page;
      stats.path = filepath;
      stats.mtime = moment(stats.mtime).format('YYYY-MM-DD HH:mm:ss')
      out.push(stats);
      return out;
    }, [])
    this.cache.set('pages', pageInfo);
    return pageInfo;
  }
}
class EditProjectController {

  constructor() {
    this.project = new Project();; // 项目本地路劲
    this.pages = {};
    // 数据库
    this.db = nedb.createDb({
      filename: 'store/dashboard/project',
      autoload: true,
    })
  }
  // 获取被编辑的项目
  async getEditProjectFromCache() {
    let doc;
    doc = await this.db.find({ type: 'editProject' });
    this.project.init(doc[0]);
  }
  // 设置关联的项目
  setEditProject(project) {
    if (!project.name) {return}
    this.db.find({ type: 'editProject' }).then(([...params]) => {
      if (params.length > 1) {
        this.db.remove({ type: 'editProject' }, true).then(() => {
          this.db.insert({
            type: 'editProject',
            name: project.name,
            dir: project.dir,
          })
        })
      } else if (params.length === 1) {
        this.db.update({ type: 'editProject' }, {
          name: project.name,
          dir: project.dir,
        })
      } else {
        this.db.insert({
          type: 'editProject',
          name: project.name,
          dir: project.dir,
        })
      }
    })
    this.project.init(project);
  }
  async getProject() {
    if (!this.project._project.dir) {
      await this.getEditProjectFromCache();
    }
    return this.project._project;
  }
  // 获取页面配置信息
  getPages() {
    return this.project.pages;
  }
  openInVscode() {
    if (!this.project.dir) {
      return message.error('找不到项目路径');
    }
    let shell = '';
    if (os.platform() !== 'win32') {
      shell = `/Applications/Visual\\ Studio\\ Code.app/Contents/Resources/app/bin/code  ${this.project.dir}`;
    }
    console.log(shell)
    exec(shell, function(err, stdout, stderr) {
      if (err) {
        message.error(err)
      }
      console.log(stderr)
    })
  }
}

const ctrl = new EditProjectController();
export default ctrl;
