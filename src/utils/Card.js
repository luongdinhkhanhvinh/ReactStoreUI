import React from 'react';
import {Touchable} from 'react-native';
import config from '../styles/config.styles';

const Card = props => {
  let {style} = props;
  return (
    <Touchable {...props} style={[config.style.card, style]}>
      {props.children}
    </Touchable>
  );
};

export default Card;
