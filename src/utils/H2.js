import React from 'react';
import {Text} from 'react-native';
import config from '../styles/config.styles';

const H2 = props => {
  const {style} = props;
  const defaultStyle = {
    fontFamily: config.headingFont,
    fontSize: config.defaultFontSize * 1.75,
    marginBottom: 15,
    color: config.defaultFontColor,
  };

  return <Text style={[defaultStyle, style]}>{props.children}</Text>;
};

export default H2;
