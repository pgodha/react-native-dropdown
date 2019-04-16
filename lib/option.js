import React, { Component, } from 'react';
const ReactNative = require('react-native');
import PropTypes from 'prop-types';

const {
  StyleSheet,
  View,
  Text
} = ReactNative;


const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: 'white',
  }
});

class Option extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style, styleText } = this.props;

    return (
      <View style={[ styles.container, style ]}>
        {this.props.children}
      </View>
    );
  }
}

Option.propTypes = {
  children: PropTypes.node.isRequired
};

module.exports = Option;
