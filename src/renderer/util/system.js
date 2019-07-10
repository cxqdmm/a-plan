const { exec } = require('child_process');
function killPort(port) {
  exec(`lsof -i:${port}`, function (err, stdout, stderr) {
    if (err) { return console.log(err); }

    stdout.split('\n').filter(function (line) {
      var p = line.trim().split(/\s+/);
      var pid = p[1];

      if (!isNaN(+pid)) {
        exec(`kill -9 ${pid}`, function (err, stdout, stderr) {
          if (err) {
            return console.log('释放指定端口失败！！');
          }

          console.log('占用指定端口的程序被成功杀掉！');
        });

      }
    });
  });
}

export {
  killPort, // kill端口
}