import React from 'react';
import {View} from 'react-native';
import {ListItem, P, Sm} from '../utils';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import config from '../styles/config.styles';

const AddressItem = props => {
  const defaultStyle = {marginLeft: 10};
  const pStyle = {fontWeight: 'bold'};
  const smStyle = {marginBottom: 9};
  return (
    <ListItem onPress={() => props.onPress(props.item)}>
      <Icon
        name={props.selected ? 'checkbox' : 'square-outline'}
        size={24}
        color={props.selected ? config.primaryColor : '#333'}
      />
      <View style={defaultStyle}>
        <P style={pStyle}>{props.item.name}</P>
        <Sm style={smStyle}>{props.item.address}</Sm>
      </View>
    </ListItem>
  );
};

export default AddressItem;
