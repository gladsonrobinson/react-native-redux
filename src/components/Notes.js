import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import NoteItem from './NoteItem';

export default class Notes extends Component {

  _renderItem = ({item}) => {

  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.props.notes}
          numColumns={2}
          horizontal={false}
          renderItem={({item}) => <NoteItem note={item.key} />}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10
  }
});
