import React from 'react';
import './index.module.less';

function Card(props) {


  return (
    <div className={props.className} styleName="card">
      {props.children}
    </div>
  )
}

function Header(props) {
  return (
    <div styleName="header">
      {props.children}
    </div>
  )
}

function Body(props) {


  return (
    <div styleName="body">
      {props.children}
    </div>
  )
}
Card.Header = Header;
Card.Body = Body;
export default Card;