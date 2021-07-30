import React from 'react';
import {View} from 'react-native';
import {P} from './P';
import {SupSm} from './SupSm';

const Price = props => {
  const pStyle = {flexDirection: 'row', alignItems: 'center'};
  const sumSmStyle = {textDecorationLine: 'line-through'};
  return (
    <View style={pStyle}>
      {props.specialPrice ? (
        <>
          <P style={props.style || {}}>{props.specialPrice}</P>
          <SupSm style={sumSmStyle}>{' ' + props.price}</SupSm>
        </>
      ) : (
        <P style={props.style || {}}>{props.price}</P>
      )}
    </View>
  );
};

export default Price;
