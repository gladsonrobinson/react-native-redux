import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet, StatusBar, AsyncStorage} from 'react-native';
import {signInAnonymously} from '../../services/firebase';
export default class AuthLoading extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //const userToken = await AsyncStorage.getItem('logintoken');
    
    signInAnonymously().then(user => {
      console.log("hellooo", user)
      //if()
      //this.props.navigation.navigate(userToken ? 'App' : 'App')
    });
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