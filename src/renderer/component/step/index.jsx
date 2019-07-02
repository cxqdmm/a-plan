import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.module.less';
import { Button } from 'antd';

function isAllStepView(children) {
  const ind = children.findIndex(item => {
    return item.type !== StepView;
  })
  return ind === -1;
}
function getProps(element) {
  let props = Object.assign({}, element.props);
  delete props.children;
  return props;
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
    <div styleName="step-container">
      {props.children[currentStep]}
      <div styleName="step-nav">
        <Button styleName="btn" type="link" onClick={() => goPre()} icon="arrow-left"></Button>
        <Button styleName="btn" type="link" onClick={() => goNext()} icon="arrow-right"></Button>
      </div>
    </div>
  )
}
Step.propTypes = {
  currentIndex: PropTypes.number,
}
function StepView(props) {
  return (props.children)
}
StepView.propTypes = {
  id: PropTypes.string.isRequired,
}
Step.StepView = StepView;
export { StepView };
export default Step;