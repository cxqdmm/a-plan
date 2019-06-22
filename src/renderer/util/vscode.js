const { exec } = require('child_process')
const os = require('os');
export function open (url) {
  let shell = '';
  if (os.platform() !== 'win32') {
    shell = '/Applications/Visual\\ Studio\\ Code.app/Contents/Resources/app/bin/code ' + url;
  }
  console.log(shell)
  exec(shell, function(err, stdout, stderr) {
    if (err) {

    }
    console.log(stderr)
  })
}