import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet, StatusBar, AsyncStorage} from 'react-native';

export default class AuthLoading extends React.Component {

  constructor(props) {
    super(props);
    this._checkAuthentication();
  }

  _checkAuthentication = async() => {
    const userToken = await AsyncStorage.getItem('logintoken');
    
    this.props.navigation.navigate(userToken ? 'App' : 'App')
  }
  

  render() {
    return (
      <View style={style.ctnr}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
        <StatusBar barStyle="default" />
      </View>
    );
  }  
}

const style = StyleSheet.create({
  ctnr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})