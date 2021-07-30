import React from 'react';
import {View} from 'react-native';

const Space = props => {
  const defaultStyle = {height: props.height || 20};
  <View style={defaultStyle}>{props.children}</View>;
};

export default Space;
