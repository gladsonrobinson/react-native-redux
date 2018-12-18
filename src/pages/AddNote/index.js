import React from "react";
import { View, Text, Button , StyleSheet} from "react-native";
import {AddEditNoteCtnr}  from '../../containers/Notes';

export default class AddNote extends React.Component {
  render() {
    return (
      <View style={styles.wraper}>
        <Text>Add Note</Text>
        <AddEditNoteCtnr navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wraper: {
    flex:1
  }
})