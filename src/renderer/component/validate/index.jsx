import React from 'react';


function Validate(props) {
  let regex =  props.regex || /\S/;
  if (!regex instanceof RegExp) {
    throw new Error('regExp is not instance of RegExp');
  }
  let input = props.input || '';
  const isPass = regex.test(input);
  return (
    <React.Fragment>
      <div style={{color: 'red'}}>
        {
          !isPass ? <div>
            {props.message || '验证无效'}
          </div> : null
        }
      </div>
      {props.children}
    </React.Fragment>
  )
}

export default Validate;
