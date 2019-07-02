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
        to: props.children[currentStep - 1].props.id,
      }
      if (props.onClick(stepInfo)) {
        setCurrentStep(currentStep - 1);
      }
    }
  }
  
  function goNext() {
    if (currentStep < props.children.length - 1) {
      const step = props.children[currentStep];
      const stepInfo = {
        from: step.props.id,
        to: props.children[currentStep + 1].props.id,
      }
      if (props.onClick(stepInfo)) {
        setCurrentStep(currentStep + 1);
      }
    }
  }

  return (
    <div styleName="step-container" className={props.className} style={props.style}>
      {props.children[currentStep]}
      <div styleName="step-nav">
        <div styleName="btn" onClick={() => goPre()}>
          <Icon type="arrow-left" />
        </div>
        <div styleName="btn" onClick={() => goNext()}>
          <Icon type="arrow-right"/>
        </div>
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