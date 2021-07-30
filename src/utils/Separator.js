import React from 'react';
import {View} from 'react-native';

const Separator = props => {
  const defaultStyle = {borderWidth: 1, borderColor: props.color || '#ccc'};
  return <View style={defaultStyle}>{props.children}</View>;
};

export default Separator;
