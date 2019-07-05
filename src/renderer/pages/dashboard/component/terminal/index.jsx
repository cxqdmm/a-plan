import React, { useRef, useEffect } from 'react';
import { createStore, useRedux, connect } from 'redux';
import terminalModule from './module';
import { hot } from 'react-hot-loader/root';
import { ipcRenderer } from 'electron';
import { useMounted } from 'hooks';
import { Terminal } from 'xterm';
import 'xterm/dist/xterm.css'
import 'xterm/dist/addons/fullscreen/fullscreen.css';
import LocalEchoController from './util/LocalEchoController';

import * as fit from 'xterm/lib/addons/fit/fit';
const store = createStore(React.createContext(), terminalModule)
Terminal.applyAddon(fit); 
const term = new Terminal({
  rendererType: 'canvas',
  convertEol: true,
  scrollback: 800,
  cols: 100,
  fontSize: 12,
  theme: {
    foreground: 'white',
    background: '#232527',
    cursor: 'help',
  }
});
let localEcho;

function enableWrite(start) { 
  localEcho.read(start)
  .then(input => {
    terminalModule.runShell([input])
  }).catch(error => alert(`Error reading: ${error}`));
}

function TerminalContainer(props) {
  const terminalRef = useRef(null);

  useMounted(() => {
    term.open(terminalRef.current);
    term.focus();
    term.fit();
    localEcho = new LocalEchoController(term);
    enableWrite()
    const listener = (event, value) => {
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
      <div ref={terminalRef} className={props.className} id="terminal"></div>
  )
}
export { terminalModule }
export default useRedux(store)(hot(connect(terminalModule)(TerminalContainer)));