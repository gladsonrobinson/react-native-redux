import React from "react";
import { View, Text } from "react-native";
import Notes  from '../../container/Notes';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
        <Notes />
      </View>
    );
  }
}