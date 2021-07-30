import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import config from '../styles/config.styles';

const Wrapper = props => {
  const {style} = props;
  const defaultStyle = {
    backgroundColor: config.backgroundColor,
    flex: 1,
    paddingTop: 5,
  };

  const scrollViewStyle = {flex: 1};

  return (
    <>
      <StatusBar
        color={config.primaryColor}
        barStyle={
          config.layoutMode === 'dark' ? 'light-content' : 'dark-content'
        }
      />
      <SafeAreaView {...props} style={[defaultStyle, style]}>
        <ScrollView style={scrollViewStyle}>{props.children}</ScrollView>
        {props.footer}
      </SafeAreaView>
    </>
  );
};

export default Wrapper;
