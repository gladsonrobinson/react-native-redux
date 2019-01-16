import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Alert} from 'react-native';

export default class NoteItem extends React.PureComponent {

  _onNoteSelect = (note, index) => {
    //Alert.alert(index.toString())
    console.log("fdfffffff",this.props)

    /* this.props.navigation.navigate('Details', {
      itemId: 86,
      otherParam: 'anything you want here',
    }); */
  }

  render() {
    return (
      <TouchableOpacity style={styles.noteCtnr} onPress={() => this.props.onPress(this.props.note, this.props.index)}>
        <View >
          <Text>{this.props.note}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  noteCtnr: {
    fontSize: 20,
    //flexGrow: 1,
    flex:1,
    padding: 10,
    margin: 5,
    borderWidth: 2,
    borderRadius: 5,
  },
  noteText: {}
})