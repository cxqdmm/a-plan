import React from 'react';
import dashboardModule from '../../module';

function Header(props) {

  const project = dashboardModule.project;
  if (!project.name) {
    return <div className="flex-1"></div>;
  }
  return (
    <div className="flex-1">
      <span>{ project.name }</span>
      {props.children}
    </div>
  )
}

export default Header;