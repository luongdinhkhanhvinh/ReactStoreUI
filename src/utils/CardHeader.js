import React from 'react';
import {View} from 'react-native';

const CardHeader = props => {
  const {style} = props;
  const defaultStyle = {
    flexDirection: 'row',
    padding: 10,
  };

  return <View style={[defaultStyle, style]}>{props.children}</View>;
};

export default CardHeader;
