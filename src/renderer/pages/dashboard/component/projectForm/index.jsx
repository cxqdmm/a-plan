import React from 'react';
// component
import { Descriptions } from 'antd';
import Validate from 'component/validate';
import PropTypes from 'prop-types';

class projectForm extends React.PureComponent {
  state = {
    showValidate: false,
  }
  canSubmit() {
    this.setState({
      showValidate: true,
    })
    return this.props.children.every(child => {
      if (child.props.hasOwnProperty('value')) {
        let regex =  child.props.regex || /\S/;
        let value = child.props.value || '';
        const isPass = regex.test(value);
        return isPass
      }
      return true;
    })
  }

  render() {
    let props = this.props;
    return <Descriptions bordered>
      {
        props.children.map((child, index) => {
          return <Descriptions.Item key={index} label={child.props.label} span={3}>
            {
              this.state.showValidate && child.props.hasOwnProperty('value') ? <Validate regex={child.props.regex} message={child.props.message} input={child.props.value}>
                {child}
              </Validate> : child
            }

          </Descriptions.Item>
        })
      }
    </Descriptions>
  }
}


projectForm.propTypes = {
  type: PropTypes.oneOf(['normal', 'validate']),
}
export default projectForm;