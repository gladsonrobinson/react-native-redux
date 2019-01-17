import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Header } from "react-navigation";

export default class CustomHeader extends React.Component {
  render() {
    return (
      <View style={style.ctnr}>
        <LinearGradient colors={["#6200EE", "#3700B3"]}>
          <Text style={style.title}>{"HOME"}</Text>
        </LinearGradient>
      </View>
    )
  }
}

const style = StyleSheet.create({
  ctnr: {
    height: 20,
    marginTop: 0,
  },
  title: {
    //flex:1
  }
});