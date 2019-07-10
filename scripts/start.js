'use strict'

const chalk = require('chalk')
const electron = require('electron')
const path = require('path')
const { spawn } = require('child_process')
const webpack = require('webpack')
const mainConfig = require('../config/main/webpack.config')
process.env.BROWSER = 'none';
process.env.PORT = 3009;

let electronProcess = null
let manualRestart = false

function logStats(proc, data, color) {
  let log = ''

  log += chalk[color].bold(`┏ ${proc} Process ${new Array((19 - proc.length) + 1).join('-')}`)
  log += '\n\n'

  if (data.constructor.name === 'Stats') {
    data.toString({
      colors: true,
      chunks: false
    }).split(/\r?\n/).forEach(line => {
      log += '  ' + line + '\n'
    })
  } else {
    log += `  ${data}\n`
  }

  log += '\n' + chalk[color].bold(`┗ ${new Array(28 + 1).join('-')}`) + '\n'

  console.log(log)
}

function startRenderer() {
  return new Promise((resolve, reject) => {
    const rendererProcess = spawn('node', ['scripts/start-renderer.js'], {
      env: process.env,
    });
    rendererProcess.stdout.on('data', data => {
      logStats('渲染进程build', data, 'blue');
      if (data.toString() === 'renderer complete') {
        resolve();
      }
    })
    rendererProcess.stderr.on('data', data => {
      logStats('渲染进程build', data, 'red')
    })
  })
}

function startMain() {
  return new Promise((resolve, reject) => {
    const config = mainConfig('development')
    const compiler = webpack(config)

    compiler.hooks.watchRun.tapAsync('watch-run', (compilation, done) => {
      logStats('主线程build', chalk.white.bold('compiling...'), 'blue')
      done()
    })

    compiler.watch({}, (err, stats) => {
      if (err) {
        console.log(err)
        return
      }

      logStats('主线程build', stats, 'blue')

      if (electronProcess && electronProcess.kill) {
        manualRestart = true
        process.kill(electronProcess.pid)
        electronProcess = null
        startElectron()

        setTimeout(() => {
          manualRestart = false
        }, 5000)
      }

      resolve()
    })
  })
}

function startElectron() {
  var args = [
    '--inspect=5858',
    path.join(__dirname, '../dist/main/main.js')
  ]

  electronProcess = spawn(electron, args)

  electronProcess.stdout.on('data', data => {
    logStats('Electron', data, 'blue')
  })
  electronProcess.stderr.on('data', data => {
    logStats('Electron', data, 'red')
  })

  electronProcess.on('close', () => {
    if (!manualRestart) process.exit()
  })
}


function init() {
  console.log(chalk.blue('  getting ready...') + '\n')
  Promise.all([startRenderer(), startMain()])
    .then(() => {
      startElectron()
    })
    .catch(err => {
      console.error(err)
    })
}

init()
