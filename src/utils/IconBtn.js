import React from 'react';
import config from '../../config';
import {View, Touchable} from './Touchable';
import Icon from 'react-native-vector-icons/Feather';
import {SupSm} from './SupSm';

const IconBtn = props => {
  const {onPress, style, icon, color, badge, size} = props;

  const defaultStyle = {alignItems: 'flex-start'};

  const viewBadgeStyle = {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: config.badgeColor,
    borderRadius: 9,
    height: 18,
    width: 18,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <View>
      <View style={defaultStyle}>
        <Touchable
          onPress={() => onPress()}
          style={[config.style.iconBtn, style || {}]}>
          <Icon
            name={icon}
            size={size || 22}
            color={color || config.defaultFontColor}
          />
          {badge ? (
            <View style={viewBadgeStyle}>
              <SupSm style={{color: config.badgeTextColor}}>{badge}</SupSm>
            </View>
          ) : null}
        </Touchable>
      </View>
    </View>
  );
};

export default IconBtn;
