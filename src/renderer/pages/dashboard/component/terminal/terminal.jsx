import React, { useRef, useEffect } from 'react';
import { createStore, useRedux, connect } from 'redux';
import terminalModule from './module';
import { hot } from 'react-hot-loader/root';
import { ipcRenderer } from 'electron';
import useMounted from 'hooks/useMounted';
import { Terminal } from 'xterm';
import 'xterm/dist/xterm.css'
import 'xterm/dist/addons/fullscreen/fullscreen.css';
import { FitAddon } from 'xterm-addon-fit';
import { SearchAddon } from 'xterm-addon-search';
import LocalEchoController from './util/LocalEchoController';

const store = createStore(React.createContext(), terminalModule)

const term = new Terminal({
  rendererType: 'canvas',
  rows: 40,
  convertEol: true,
  scrollback: 10,
  cursorBlink: true,
  fontSize: 12,
  theme: {
    foreground: 'yellow',
    background: '#060101',
    cursor: 'help',
  }
});
let localEcho;

term.loadAddon(new FitAddon());
term.loadAddon(new SearchAddon());

function enableWrite(start) { 
  localEcho.read(start)
  .then(input => {
    terminalModule.runShell([input])
  }).catch(error => alert(`Error reading: ${error}`));
}

function TerminalContainer() {
  const terminalRef = useRef(null);

  useMounted(() => {
    term.open(terminalRef.current);
    term.focus();
    localEcho = new LocalEchoController(term);
    enableWrite()
    const listener = (event, value) => {
      console.log('value:', value)
      localEcho.print(value)
      if (/\[m\[m\[m/.test(value)) {
        localEcho.nextStart = value;
      }
      if (/\[?2004h/.test(value)) {
        enableWrite( localEcho.nextStart );
      }
    }
    ipcRenderer.on('shell-out', listener)
    return () => {
      ipcRenderer.off('shell-out', listener)

    }
  })

  useEffect(() => {
    if (terminalModule.shell) {
      terminalModule.shell.forEach(sl => {
        ipcRenderer.send('shell-message', sl)
      })
    }
  }, [terminalModule.waiting])

  return (
    <div>
      <div ref={terminalRef} id="terminal"></div>
    </div>
  )
}
export { terminalModule }
export default useRedux(store)(hot(connect(terminalModule)(TerminalContainer)));