import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { createStore, useRedux, connect } from 'redux';
import terminalModule from './module';
import { hot } from 'react-hot-loader/root';
import { ipcRenderer } from 'electron';
import { useMounted } from 'hooks';
import { Terminal } from 'xterm';
import 'xterm/dist/xterm.css'
import 'xterm/dist/addons/fullscreen/fullscreen.css';
import LocalEchoController from './util/LocalEchoController';
import { Icon } from 'antd';
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
        enableWrite(localEcho.nextStart);
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

  useEffect(() => {
    if (props.visible) {
      term.fit();
    }
  },[props.visible])
  return (
    <Termianl visible={props.visible} >
      <HeadBar onClick={() => {props.onClose()}}>
        <Icon type="close-circle" />
      </HeadBar>
      <div ref={terminalRef} id="terminal"></div>
    </Termianl>
  )
}
export { terminalModule as module }
export default useRedux(store)(hot(connect(terminalModule)(TerminalContainer)));
const HeadBar = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: 1000;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  font-size: 30px;
  display: flex;
  justify-content:center;
  align-items: center;
  color: #fff;
`
const Termianl = styled.div`
  position: absolute;
  z-index: 1000;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 5px;
  user-select: none;
  background-color: #232527;
  left: ${props => props.visible ? 0 : '10000px'};
  #terminal {
    height: 100%;
  }
`