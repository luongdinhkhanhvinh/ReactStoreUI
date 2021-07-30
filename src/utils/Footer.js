import React from 'react';
import {View} from 'react-native';

const Footer = props => {
  const {style} = props;
  const defaultStyle = {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 15,
  };

  return <View style={[defaultStyle, style]}>{props.children}</View>;
};

export default Footer;
