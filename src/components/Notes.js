import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import NoteItem from './NoteItem';

export default class Notes extends Component {

  constructor(props) {
    super(props);

    this._onNotePress = this._onNotePress.bind(this);
  }

  _onNotePress(note, index) {
    this.props.navigation.navigate('AddNote', { note, index });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.props.notes}
          numColumns={2}
          horizontal={false}
          keyExtractor={item => item.id}
          renderItem={({item,index}) => <NoteItem key={item.id} note={item.note} index={index} onPress={this._onNotePress} />}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex:1
  }
});
