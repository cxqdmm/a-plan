import React from 'react';
import PropTypes from 'prop-types';
export class If extends React.PureComponent {

  render() {
    let props = this.props;
    this.isValid = true;
    this.visible = props.value;
    return (
      props.value ? <React.Fragment>
        {props.children}
      </React.Fragment> : null
    )
  }
}
If.propTypes = {
  value: PropTypes.bool.isRequired
}


export class ElseIf extends React.PureComponent {
  findFiberByIndex(fiber, index) {
    if (fiber.index === index) {
      return fiber;
    } else if (fiber.sibling) {
      return this.findFiberByIndex(fiber.sibling, index);
    } else {
      return null;
    }
  }
  findPreFiber() {
    const currentFiber = this._reactInternalFiber;
    const currentIndex = currentFiber.index;
    const returnFiber = currentFiber.return;
    if (currentIndex > 0) {
      return this.findFiberByIndex(returnFiber.child, currentIndex - 1);
    } else {
      return null;
    }
  }
  render() {
    const preFiber = this.findPreFiber();
    let isPreVisible = false;
    if (!preFiber) {
      return null;
    }
    if (['If', 'ElseIf'].indexOf(preFiber.elementType.name) > -1) {
      preFiber.stateNode.visible && (isPreVisible = true)
    } else {
      throw new Error('If must in front of ElseIf')
    }
    let props = this.props;
    this.isValid = true;
    this.isPreValid = preFiber.stateNode.isValid;
    this.isPreVisible = isPreVisible;
    this.visible = props.value;
    if (this.isPreValid
      && !this.isPreVisible
      && this.visible) {
      return (<React.Fragment>
        {props.children}
      </React.Fragment>)
    }
    return null;
  }
}

export class Else extends ElseIf {
  render() {
    const preFiber = this.findPreFiber();
    let isPreVisible = false;
    if (!preFiber) {
      return null;
    }
    if (['If', 'ElseIf'].indexOf(preFiber.elementType.name) > -1) {
      preFiber.stateNode.visible && (isPreVisible = true)
    } else {
      throw new Error('If or ElseIf must in front of Else')
    }
    let props = this.props;
    this.isValid = true;
    this.isPreValid = preFiber.stateNode.isValid;
    this.isPreVisible = isPreVisible;
    if (this.isPreValid
      && !this.isPreVisible) {
      return (<React.Fragment>
        {props.children}
      </React.Fragment>)
    }
    return null;
  }
}