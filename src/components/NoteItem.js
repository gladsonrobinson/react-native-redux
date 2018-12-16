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
    flex: 1,
    fontSize: 20,
    height: 100,
    margin: 1,
    padding: 10,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderRadius:5,
  },
  noteText: {}
})