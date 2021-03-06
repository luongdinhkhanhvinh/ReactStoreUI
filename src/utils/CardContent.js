import React from 'react';
import {View} from 'react-native';

const CardContent = props => {
  const {style} = props;
  const defaultStyle = {
    padding: props.padding || props.padding === 0 ? props.padding : 10,
  };

  return <View style={[defaultStyle, style]}>{props.children}</View>;
};

export default CardContent;
