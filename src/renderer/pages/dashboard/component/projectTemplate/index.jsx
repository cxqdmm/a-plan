import React from 'react';
import { Button, Row, Col, Icon } from 'antd';
function Template(props) {
  return (
    <div>
      {
        props.templates.map(item => {
          return <span key={item}>{item}</span>
        })
      }
    </div>
  )
}

export default Template;