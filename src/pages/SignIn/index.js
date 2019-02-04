import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class SignIn extends React.Component {
  render() {
    return (
      <View style={style.ctnr}>
        <Text>Sign IN Using</Text>
        <Button title="Google"></Button>
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