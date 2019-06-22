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
import LocalEchoController from 'local-echo';

const store = createStore(React.createContext(), terminalModule)

const term = new Terminal({
  rendererType: 'canvas',
  rows: 20,
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

function TerminalContainer() {
  const terminalRef = useRef(null);
  useMounted(() => {
    term.open(terminalRef.current);
    localEcho = new LocalEchoController(term);

    // localEcho.read("~$ ")
    //   .then(input => )
    //   .catch(error => alert(`Error reading: ${error}`));
    ipcRenderer.on('shell-out', (event, value) => {
      localEcho.print(value)
      console.log(value)
    })
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