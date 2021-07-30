import React from 'react';
import config from '../styles/config.styles';
import {Touchable} from './Touchable';

const Card = props => {
  let {style} = props;

  return (
    <Touchable {...props} style={[config.style.card, style]}>
      {props.children}
    </Touchable>
  );
};

export default Card;
