import React from 'react';
import {View} from 'react-native';

const Right = props => {
  const defaultStyle = {
    justifyContent: 'flex-end',
    flex: props.flex || 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  };
  return <View style={defaultStyle}>{props.children}</View>;
};

export default Right;
