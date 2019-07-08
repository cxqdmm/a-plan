import React from 'react';
import Card from 'component/card';
import { Row, Col } from 'antd';
import Button from 'component/button';
import styled from 'styled-components';
function Pages(props) {

  return (
      <Card className={props.className}>
        <Card.Header>
          {props.title}
        </Card.Header>
        <Card.Body style={{height: 300}}>
          {
            props.pages ? props.pages.map((item, key) => {
              return <ListItem key={key} {...item} />
            }) : null
          }
        </Card.Body>
      </Card>
  )
}

function ListItem(props) {
  return <Row type="flex" align="middle" justify="space-between">
    <Col span={6} >
      {props.name}
    </Col>
    <Col xs={6} sm={6} md={8} lg={10} >
      <Button type="link" icon="delete" ></Button>
    </Col>
  </Row>
}



export default Pages;