const electron = require('electron');
const app = electron.app;
const ipcMain = electron.ipcMain;
const dialog = electron.dialog;
const BrowserWindow = electron.BrowserWindow;
const { launchTerminal } = require('./terminal');
const path = require('path');
const isDev = require('electron-is-dev');
let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900, 
    height: 680,
    webPreferences: {
      nodeIntegration: true
  }
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
})
ipcMain.on('open-directory-dialog', (event, p) => {
  dialog.showOpenDialog({
        properties: [p]
      },function (files) {
          if (files){// 如果有选中
            // 发送选择的对象给子进程
            event.sender.send('selectDir', files[0])
          }
      })
})

// 驱动终端
launchTerminal(ipcMain);