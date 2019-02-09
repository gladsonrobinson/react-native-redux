import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {googleSignIn} from '../../services/firebase';


export default class SignIn extends React.Component {

  _authUserLogin = () => {
    googleSignIn();
  }

  render() {
    return (
      <View style={style.ctnr}>
        <Text>Sign In Using</Text>
        <Button title="Google" onPress={this._authUserLogin}></Button>
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