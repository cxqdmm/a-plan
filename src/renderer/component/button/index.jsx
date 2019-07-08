import React from 'react';
import { Icon } from 'antd';
import styled, { css } from 'styled-components';
const sizeStyle = css`
  font-size: ${ props => {
    return ({
      large: '16px',
      middle: '14px',
      small: '12px',
    }[props.size || 'middle'])
  }};
  height: ${ props => {
    return ({
      large: '40px',
      middle: '32px',
      small: '24px',
    }[props.size || 'middle'])
  }};
  width: ${ props => {
    if (!props.hasChildren) {
      return ({
        large: '40px',
        middle: '32px',
        small: '24px',
      }[props.size || 'middle'])
    }
    return 'initial';
  }};
  padding: ${ props => {
    return ({
      large:  props.hasChildren ? '0 15px' : '0',
      middle: props.hasChildren ? '0 15px' : '0',
      small: props.hasChildren ? '0 7px' : '0',
    }[props.size || 'middle'])
  }};
`
const typeStyle = css`
  background-color: ${ props => {
    return ({
      primary: '#1890ff',
      normal: '#fff',
      dashed: '#ff',
      danger: '#f5f5f5',
      link: '#fff',
      light: '#E8F3FF',
    }[props.type || 'primary'])
  }};
  border-color: ${ props => {
    return ({
      primary: '#1890ff',
      normal: '#d9d9d9',
      danger: '#fff',
      link: '#fff',
      light: '#E8F3FF',
    }[props.type || 'primary'])
  }};
  color: ${ props => {
    return ({
      primary: '#fff',
      normal: 'rgba(0,0,0,0.65)',
      danger: '#f5222d',
      link: 'rgba(0,0,0,0.65)',
      light:'#1890ff',
    }[props.type || 'primary'])
  }};
  &:hover ${ props => {
    return ({
      primary: `{
        background-color: #40a9ff;
        border-color: #40a9ff;
      }`,
      normal: `{
        border-color: #1890ff;
        color: #1890ff;
      }`,
      danger: `{
        background-color: #f5222d;
        border-color: #f5222d;
        color: #fff;
      }`,
      link: `{
        color: #1890ff;
      }`,
    }[props.type || 'primary'])
  }};
`
const shapeStyle = css`
  border-radius: ${ props => {
    return ({
      normal: '4',
      round: '20px',
    }[props.shape || 'normal'])
  }};
`
const Btn = styled.div`
  display: inline-flex;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-align: center;
  line-height: 1.499;
  font-weight: 400;
  user-select: none;
  transition: all .3s ease;
  ${sizeStyle};
  ${typeStyle};
  ${shapeStyle};
`
function Button(props) {
  if (props.children) {
    return (
      <Btn {...props} hasChildren={!!props.children}>
        {
          props.icon ? <Icon type={props.icon} theme={props.theme}/> : null
        }
        <span style={{ marginLeft: props.icon ? 5 : 0 }}>{props.children}</span>
      </Btn>
    )
  } else {
    return (
      <Btn {...props}>
        {
          props.icon ? <Icon type={props.icon} theme={props.theme}/> : null
        }
      </Btn>
    )
  }
}
export default Button;