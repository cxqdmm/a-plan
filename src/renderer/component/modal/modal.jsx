import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.module.less';
function leftModal(props) {
  return (
    <div styleName="modal" className={props.className} style={props.style}>
      <div styleName="left">
        {props.children}
      </div>
      <div styleName="mask" onClick={props.onClickMask || (() => {})}>

      </div>
    </div>
  )
}

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
  let modal;
  if (props.type === 'left') {
    modal = leftModal(props);
  }
  return props.visible && modal && container ? ReactDOM.createPortal(modal,container) : null;
}

export default Modal;