import React from 'react';
import config from '../styles/config.styles';
import {Touchable} from './Touchable';
import {Row} from './Row';
import {Left} from './Left';
import {Right} from './Right';

const ListItem = props => {
  const {style, icon} = props;
  const defaultStyle = {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: config.listBackgroundColor,
    borderBottomColor: config.listSeparatorColor,
    borderBottomWidth: 1,
  };

  return (
    <Touchable {...props} style={[defaultStyle, style]}>
      <Row>
        <Left flex={0.8}>{props.children}</Left>
        <Right flex={0.2}>{icon}</Right>
      </Row>
    </Touchable>
  );
};

export default ListItem;
