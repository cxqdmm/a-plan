import Datesotre from 'nedb';

class DbInstance {
  constructor(props) {
    this.db = new Datesotre(props);
  }
  insert(data) {
    return new Promise((resolve, reject) => {
      this.db.insert(data, function(err, newDoc) {
        if (err) {
          reject(err);
        } else {
          resolve(newDoc);
        }
      })
    })
  }
  find(search) {
    return new Promise((resolve, reject) => {
      this.db.find(search, function(err, doc) {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      })
    })
  }
}

class Nedb {
  constructor() {
    this._dbMap = new Map();
  }
  createDb(props) {
    const db = new DbInstance(props);
    this._dbMap.set(props.filename, db);
    return db;
  }
  get(filename) {
    return this._dbMap.get(filename);
  }
}



export default new Nedb();