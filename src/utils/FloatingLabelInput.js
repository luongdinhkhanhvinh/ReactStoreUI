import React from 'react';
import {View, TextInput, Text} from 'react-native';
import config from '../styles/config.styles';

export default class FloatingLabelInput extends React.Component {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});

  render() {
    const {label, ...props} = this.props;
    const {isFocused} = this.state;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: !isFocused && (!props.value || props.value === '') ? 18 : 0,
      fontSize: !isFocused && (!props.value || props.value === '') ? 18 : 13,
      fontWeight:
        !isFocused && (!props.value || props.value === '') ? 'bold' : 'normal',
      color: !isFocused ? '#7d7d82' : config.defaultFontColor,
      fontFamily: config.defaultFont,
    };

    const defaultStyle = {paddingTop: 15, marginBottom: 15, width: '100%'};

    const inputStyle = {
      height: 35,
      padding: 0,
      fontSize: 18,
      color: config.defaultFontColor,
      borderBottomWidth: 1,
      fontWeight: 'bold',
      borderBottomColor: '#c5c5c5',
      fontFamily: config.defaultFont,
    };
    return (
      <View style={defaultStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          {...props}
          style={{inputStyle}}
          textBreakStrategy={'simple'}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </View>
    );
  }
}
