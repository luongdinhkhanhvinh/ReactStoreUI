import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardFooter, CardImage, P} from '../utils';

const CategoryCardItem = props => {
  return (
    <Card style={props.style} onPress={() => props.onPress()}>
      <CardImage source={{uri: props.item.image}} style={props.imageStyle} />
      <CardFooter style={styles.cardFooter}>
        <P normal={true} bold={true}>
          {props.item.name}
        </P>
      </CardFooter>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardFooter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryCardItem;
