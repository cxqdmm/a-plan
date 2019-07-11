const pty = require('node-pty');

class Shell {
  constructor() {
    this.sender = null;
    this.shell = pty.spawn('/bin/zsh', [], {
      name: 'xterm-color',
      cwd: process.env.HOME,
      env: process.env
    });
    var that = this;
    this.shell.on('data', function () {
      that.sender && that.sender.send('shell-out', arguments[0])
      process.stdout.write(arguments[0]);
    });
    this.sender = null;
  }
  write(sender, p) {
    this.sender = sender;
    this.shell.write(p + '\r')
  }
}
exports.launchTerminal = function (ipcMain) {
  const shell = new Shell();

  ipcMain.on('shell-message', (event, p) => {
    shell.write(event.sender, p);
  })
}