import React from "react";
import { View, Text, Button } from "react-native";
import {NotesCtnr}  from '../../containers/Notes';
import style from './styles';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Text style={style.title}>Home</Text>
          <Button style={style.addNoteBtn} title="Add Note" onPress={()=> {this.props.navigation.navigate('AddNote')}}></Button>
        <NotesCtnr />
      </View>
    );
  }
}