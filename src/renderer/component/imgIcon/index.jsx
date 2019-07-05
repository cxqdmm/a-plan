import React from 'react';
import styled, { css } from 'styled-components';
const sizeStyle = css`
  width: ${ props => {
    return ({
      large: '40px',
      middle: '30px',
      small: '16px',
    }[props.size || 'middle'])
  }};
  height: ${ props => {
    return ({
      large: '40px',
      middle: '30px',
      small: '16px',
    }[props.size] || 'middle')
  }};
`

const Icon = styled.img`
  display: inline-flex;
  user-select: none;
  ${sizeStyle};
`
function ImgIcon(props) {
  return (
    <Icon {...props} alt=""></Icon>
  )

}
export default ImgIcon;