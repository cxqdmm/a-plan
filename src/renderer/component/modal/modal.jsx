import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.module.less';

function Modal(props) {
  let [container, setContainer] = useState();
  useEffect(() => {
    const container = document.createElement('div');
    container.className = 'modal_container'
    setContainer(container);
    document.body.appendChild(container);
    return function () {
      document.body.removeChild(container);
    }
  }, [])
  let type = ['left', 'right', 'top', 'bottom', 'center'].indexOf(props.type) > -1 ? props.type : 'center';
  return props.visible && container ? ReactDOM.createPortal(
    <div styleName="modal" className={props.className} style={props.style}>
      <div styleName={type}>
        {props.children}
      </div>
      <div styleName="mask" onClick={props.onClickMask || (() => { })}></div>
    </div>, container) : null;
}

export default Modal;