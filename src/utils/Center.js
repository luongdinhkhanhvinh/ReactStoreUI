import React from 'react';
import {View} from 'react-native';

const Center = props => {
  const defaultStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    flex: props.flex || 1,
    flexDirection: props.flexDirection || 'row',
  };
  return <View style={defaultStyle}>{props.children}</View>;
};

export default Center;
