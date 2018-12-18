import React from "react";
import { View, Text, Button } from "react-native";
import {AddEditNoteCtnr}  from '../../containers/Notes';

export default class AddNote extends React.Component {
  render() {
      console.log('kkkkkkkkkkk', this.props)
    return (
      <View>
        <Text>Add Note</Text>
        <AddEditNoteCtnr />
      </View>
    );
  }
}