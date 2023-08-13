import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getComponentOptionValue } from './utils'; // Replace with the correct path to your utility function
import OptionContext from './OptionContext';

class Selector extends Component {
  constructor(props) {
    super(props);
    this.optionContextUpdate = () => {
      this.forceUpdate();
    };
  }

  static contextType = OptionContext;

  componentDidMount() {
    const { option, defaultOption } = this.props;
    const optionContext = this.context;
    const defaultValue =
      typeof defaultOption === 'string'
        ? defaultOption
        : getComponentOptionValue(defaultOption);

    optionContext.addStateChangeListener(this.optionContextUpdate);
    optionContext.optionEnter(option.key);
    const optionState = optionContext.getOptionState(option.key);
    this.updateOptionValues();

    if (optionState) {
      optionContext.setDefaultValue(option.key, defaultValue);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.updateOptionValues();
    }
  }

  componentWillUnmount() {
    this.context.removeStateChangeListener(this.optionContextUpdate);
    this.context.optionExit(this.props.option.key);
  }

  updateOptionValues() {
    const { option, children } = this.props;
    const values = React.Children.map(
      children,
      (child) => getComponentOptionValue(child.type)
    );

    if (new Set(values).size !== values.length) {
      throw new Error('Duplicate values');
    }

    this.context.setOptions(option.key, values);
  }

  render() {
    const { option, children } = this.props;
    const value = this.context.getValue(option.key);

    let result = null;
    React.Children.forEach(children, (child) => {
      if (getComponentOptionValue(child.type) === value) {
        result = child;
      }
    });

    return result;
  }
}

Selector.propTypes = {
  option: PropTypes.object.isRequired,
  defaultOption: PropTypes.any,
  children: PropTypes.node.isRequired,
};

export default Selector;
