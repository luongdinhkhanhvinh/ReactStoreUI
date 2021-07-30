import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Modal,
  SafeAreaView,
} from 'react-native';
import config from '../styles/config.styles';
import Icon from 'react-native-vector-icons/Feather';
import {ListItem} from './ListItem';
import {P} from './P';
import {Header} from './Header';
import {Left} from './Left';
import {IconBtn} from './IconBtn';
import {Container} from './Container';
import {Space} from './Space';

export default class Picker extends React.Component {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});

  selectItem(item) {
    this.props.onChangeItem && this.props.onChangeItem(item);
    this.setState({isFocused: false});
  }

  _renderItem = ({item, index}) => {
    const pStyle = {
      marginBottom: 0,
    };
    return (
      <ListItem
        onPress={() => this.selectItem(item)}
        icon={
          this.props.value === item.label ? (
            <Icon name="check" size={20} color={config.primaryColor} />
          ) : null
        }>
        {item.icon ? item.icon : null}
        <P style={pStyle}>{item.label}</P>
      </ListItem>
    );
  };

  render() {
    const {label, items, ...props} = this.props;
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
      fontSize: 18,
      color: config.defaultFontColor,
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5',
      fontWeight: 'bold',
      fontFamily: config.defaultFont,
    };

    const modalStyle = {backgroundColor: 'red'};

    const viewStyle = {position: 'absolute', top: 20, right: 10};

    const safeAreaViewStyle = {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: config.backgroundColor,
    };

    const iconBtnStyle = {marginLeft: -10};
    return (
      <View style={defaultStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          {...props}
          onTouchStart={() => this.setState({isFocused: true})}
          editable={false}
          style={inputStyle}
          ref={input => {
            this.input = input;
          }}
          textBreakStrategy={'simple'}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />

        <View style={viewStyle}>
          <Icon name={'chevron-down'} size={20} />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isFocused}
          style={modalStyle}>
          <SafeAreaView style={safeAreaViewStyle}>
            <FlatList
              ListHeaderComponent={
                <>
                  <Header>
                    <Left>
                      <IconBtn
                        icon={'x'}
                        style={iconBtnStyle}
                        onPress={() => this.setState({isFocused: false})}
                      />
                    </Left>
                  </Header>
                  <Container>
                    {this.props.hideSearchBar === true ? null : (
                      <TextInput
                        placeholderTextColor={'#999999'}
                        style={config.style.formInput2}
                        onChangeText={text => this.setState({q: text})}
                        placeholder={'Search ...'}
                        value={this.state.q}
                        underlineColorAndroid={'transparent'}
                      />
                    )}
                    <Space />
                  </Container>
                </>
              }
              data={
                this.state.q
                  ? items.filter(item => {
                      return item.label.indexOf(this.state.q) !== -1;
                    })
                  : items
              }
              extraData={this.state}
              renderItem={this._renderItem}
            />
          </SafeAreaView>
        </Modal>
      </View>
    );
  }
}
