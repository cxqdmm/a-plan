import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.module.less';

function Modal(props) {
  let [active, setActive] = useState(false);
  let [className, setClassName] = useState('');
  let [container, setContainer] = useState();
  useEffect(() => {
    let container = null;
    if (active) {
      container = document.createElement('div');
      container.className = 'modal_container'
      setContainer(container);
      document.body.appendChild(container);
    }
    return function () {
      container && document.body.removeChild(container);
    }
  }, [active])
  useEffect((visible) => {
    if (props.visible && !active) {
      setActive(true);
    }
    if (props.visible) {
      setClassName('')
      setTimeout(() => {
        setClassName('enter')
      }, 150)
    } else {
      if (active) {
        setClassName('leave');
        setTimeout(() => {
          setClassName('hide');
        }, 300)
      }
    }
  }, [props.visible])

  let type = ['left', 'right', 'top', 'bottom', 'center'].indexOf(props.type) > -1 ? props.type : 'center';
  return active && container ? ReactDOM.createPortal(
    <div styleName={`modal ${className}`}>
      <div styleName={type}>
        {props.children}
      </div>
      <div styleName="mask" onClick={props.onClickMask || (() => { })}></div>
    </div>, container) : null;
}

export default Modal;