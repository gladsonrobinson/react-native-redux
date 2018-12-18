import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import NoteItem from './NoteItem';

export default class Notes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.props.notes}
          numColumns={2}
          horizontal={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => <NoteItem key={item.id} note={item.note} />}/>
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
