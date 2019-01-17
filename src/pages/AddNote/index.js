import React from "react";
import { View, Text, Button , StyleSheet} from "react-native";
import NotesCtnr  from '../../containers/Notes';
import {AddEditNote} from '../../components';

export default class AddNote extends React.Component {
  render() {
    return (
      <View style={styles.wraper}>
        <NotesCtnr>
          {({addNote, editNote, deleteNote})=>{
            return <AddEditNote addNote={addNote} editNote={editNote} deleteNote={deleteNote}  navigation={this.props.navigation} />
          }}
        </NotesCtnr>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wraper: {
    flex:1
  }
})
