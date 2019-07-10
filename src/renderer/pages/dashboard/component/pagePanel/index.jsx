import React from 'react';
import styled from 'styled-components';
import Card from 'component/card';
import Button from 'component/button';
function Pages(props) {

  return (
      <Card className={props.className}>
        <Card.Header>
          {props.title}
        </Card.Header>
        <Card.Body style={{height: 300}}>
          {
            props.pages ? props.pages.map((item, key) => {
              return <Li key={key}>
                <Name>
                  <span className="name">{item.name}</span>
                  <span className="time">{item.mtime}</span>
                </Name>
                <Operation>
                  <Button type="light" size="small" icon="delete" shape="round"></Button>
                </Operation>
              </Li>
            }) : null
          }
        </Card.Body>
      </Card>
  )
}

const Li = styled.div`
  display: flex;
  margin-left: 30px;
  padding-right: 30px;
  align-items: center;
  height: 55px;
  border-bottom: 1px solid #F3F5F8;
`
const Name = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  .time {
    font-size: 12px;
    color: #BDBDBD;
  }
`

const Operation = styled.div`
  flex: 0;
  white-space: nowrap;
`


export default Pages;