import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const StarRating = props => {
  const defaultStyle = {flexDirection: 'row', marginBottom: 5};
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Icon
        key={i}
        name="star"
        color={props.rating >= i ? '#f9b000' : '#b2b2b2'}
        size={13}
      />,
    );
  }

  return <View style={defaultStyle}>{stars}</View>;
};

export default StarRating;
