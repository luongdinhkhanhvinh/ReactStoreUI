import {Dimensions, Image} from 'react-native';
import React from 'react';
import config from '../styles/config.styles';
const {height} = Dimensions.get('window');

const CardImage = props => {
  const defaultStyle = {
    borderTopLeftRadius: config.defaultBorderRadius,
    borderTopRightRadius: config.defaultBorderRadius,
    width: '100%',
    height: height / 5,
    resizeMode: 'cover',
  };

  return <Image style={[defaultStyle, props.style]} source={props.source} />;
};

export default CardImage;
