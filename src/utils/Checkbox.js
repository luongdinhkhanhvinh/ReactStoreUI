import React from 'react';
import config from '../styles/config.styles';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import {Touchable} from './Touchable';

const Checkbox = props => {
  return (
    <Touchable onPress={() => props.onPress()}>
      <IonIcon
        name={props.selected ? 'checkbox' : 'square-outline'}
        size={24}
        color={props.selected ? config.primaryColor : '#333'}
      />
    </Touchable>
  );
};

export default Checkbox;
