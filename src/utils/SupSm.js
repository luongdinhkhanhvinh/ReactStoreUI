import React from 'react';
import {Text} from 'react-native';
import config from '../styles/config.styles';

const SupSm = props => {
  const {style} = props;
  const defaultStyle = {
    fontFamily: config.defaultFont,
    fontSize: config.defaultFontSize * 0.7,
    marginBottom: 1,
    color: config.defaultFontColor,
  };

  return <Text style={[defaultStyle, style]}>{props.children}</Text>;
};

export default SupSm;
