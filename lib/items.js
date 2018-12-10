import React, { Component, } from 'react';
const ReactNative = require('react-native');

const {
  Dimensions,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text
} = ReactNative;

import { ExtendedScrollView } from '@bluejeans/react-native-bluejeans-components';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollView: {
    height: 120,
    width: 198 //TODO: this needs to be dynamic
  },
  container: {
    position: 'absolute',
    borderColor: '#CCD3DA',
    borderWidth: 1,
    borderRadius: 2,
    borderTopColor: 'transparent',
    backgroundColor : '#ffffff',
    zIndex: 1000
  }
})

class Items extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, positionX, positionY, show, onPress, width, height } = this.props;

    if (!show) {
      return null;
    }

    const renderedItems = React.Children.map(items, (item) => {

      return (
        <TouchableWithoutFeedback onPress={() => onPress(item.props.children, item.props.value) }>
          <View>
            {item}
          </View>
        </TouchableWithoutFeedback>
      );
    });

    return (
      <View style={[styles.container, { top: positionY, left: positionX }]}>
        <ExtendedScrollView
          style={{ width: width - 2, height: height * 4 }}
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator
          bounces={false}>
          {renderedItems}
        </ExtendedScrollView>
      </View>
    );
  }
}

Items.propTypes = {
  positionX: React.PropTypes.number,
  positionY: React.PropTypes.number,
  show: React.PropTypes.bool,
  onPress: React.PropTypes.func
};

Items.defaultProps = {
  width: 0,
  height: 0,
  positionX: 0,
  positionY: 0,
  show: false,
  onPress: () => {}
};

module.exports = Items;
