import React from 'react';
import { Icon } from 'antd';
import './index.module.less';
import { Link, withRouter } from 'react-router-dom';
@withRouter
class Menu extends React.Component {
  render() {
    return (
        <div className="flex vertical" styleName="menu">
          {
            this.props.pages.map((page, index) => {
              return <Link key={index} styleName={`menu-item ${this.props.location.pathname === page.path ? 'highlight' : ''}`} to={page.path}>
                <Icon styleName="font" theme="filled" type={page.type} />
                <span>{page.title}</span>
              </Link>
            })
          }
        </div>
    )
  }
}
export default Menu;