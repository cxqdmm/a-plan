import fs from 'fs';
import path from 'path';
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const templatePath = resolveApp('src/web-template');

export { templatePath };