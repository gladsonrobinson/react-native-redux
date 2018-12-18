import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Alert} from 'react-native';

export default class NoteItem extends React.PureComponent {

  _onNoteSelect = () => {
    Alert.alert('Helloooo')
  }

  render() {
    return (
      <TouchableOpacity style={styles.noteCtnr} onPress={this._onNoteSelect}>
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
    flexGrow: 1,
    padding: 10,
    margin: 5,
    borderWidth: 2,
    borderRadius: 5,
  },
  noteText: {}
})