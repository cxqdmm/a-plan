import fs from 'fs';
import path from 'path';

export function debounce(fn, time) {
  let startTime, interval = time || 300, clock;
  return function(e) {
    let  targetValue = e.target.value;
    if (clock) {
      if ((new Date()).getTime - startTime > interval) {
        clearTimeout(clock);
      }
    }
    startTime = (new Date()).getTime();
    clock = setTimeout(() => {
      fn(targetValue);
      clearTimeout(clock);
    }, interval);
  }
}

export function objToArray(obj = {}) {
  return Object.keys(obj).reduce((out, item) => {
    out.push({
      name: item,
      value: obj[item],
    })
    return out;
  }, []);
}

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

export function getTemplate() {
  const dirs = fs.readdirSync(resolveApp('src/web-template'));
  const templates = dirs.filter(item => {
    return !/^\./.test(item);
  })
  return templates;
}