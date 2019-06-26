import React from 'react';
import { Icon } from 'antd';
import './index.module.less';
import { Link } from 'react-router-dom';
function Menu(props) {
  return (
      <div className="flex vertical" styleName="menu">
        {
          props.pages.map(page => {
            return <Link styleName={`menu-item ${window.location.pathname === page.path ? 'highlight' : ''}`} to={page.path}>
              <Icon width="40px" height="20px" type="appstore" />
              <span>{page.title}</span>
            </Link>
          })
        }
      </div>
  )
}
export default Menu;