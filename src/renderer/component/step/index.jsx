import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.module.less';
import { Icon } from 'antd';

function isAllStepView(children) {
  const ind = children.findIndex(item => {
    return item.type !== StepView;
  })
  return ind === -1;
}

function Step(props) {
  const [currentStep, setCurrentStep] = useState(props.currentIndex || 0)
  if (!isAllStepView(props.children)) {
    throw new Error('children of Step is not StepView');
  }
  
  function goPre() {
    if (currentStep > 0) {
      const step = props.children[currentStep];
      const stepInfo = {
        from: step.props.id,
        status: 'back',
      }
      if (props.onClick(stepInfo)) {
        setCurrentStep(currentStep - 1);
      }
    }
  }
  
  function goNext() {
    const step = props.children[currentStep];
    const stepInfo = {
      last: false,
      status: 'forward',
      from: step.props.id,
    }
    if (currentStep < props.children.length - 1) {
      if (props.onClick(stepInfo)) {
        setCurrentStep(currentStep + 1);
      }
    } else {
      stepInfo.last = true;
      props.onClick(stepInfo)
    }
  }

  return (
    <div styleName="step-container" className={props.className} style={props.style}>
      <div styleName="step-header">
          <span styleName="title">
            {props.title || '标题'}
          </span>
          <div styleName="btn-close" onClick={() => {props.onClose()}}>
            <Icon type="close" />
          </div>
      </div>
      {props.children[currentStep]}
      <div styleName="step-nav">
        {
          currentStep !== 0 ? <div styleName="btn" onClick={() => goPre()}>
            上一步
          </div> : null
        }
        {
          currentStep < props.children.length - 1 ? <div styleName="btn" onClick={() => goNext()}>
            下一步
          </div> : <div styleName="btn" onClick={() => goNext()}>
            确定
          </div>
        }
        
      </div>
    </div>
  )
}
Step.propTypes = {
  currentIndex: PropTypes.number,
}
function StepView(props) {
  return (
    <div styleName="step-view">
      {props.children}
    </div>
    )
}
StepView.propTypes = {
  id: PropTypes.string.isRequired,
}
Step.StepView = StepView;
export { StepView };
export default Step;