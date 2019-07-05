import React from 'react';
import { Icon } from 'antd';
import './index.module.less';
function Template(props) {
  return (
    <div styleName='container'>
      {
        props.templates.map(item => {
          return <div styleName='temp-item' key={item} onClick={() => {props.onSelect(item)}}>
            {
              props.value === item ? <Icon styleName='i-select' type="check-circle" theme="filled" /> : null
            }
            <span>{item}</span>
          </div>
        })
      }
    </div>
  )
}

export default Template;