import React from "react";
import { View, Text, Button } from "react-native";
import NotesCtnr  from '../../containers/Notes';
import style from './styles';
import {Notes, AddNoteButton} from "../../components";

export default class Home extends React.Component {
  render() {
    return (
      <View style={style.wrapper}>
        <NotesCtnr>
          {({notes})=>{
            return <Notes notes={notes} navigation={this.props.navigation} />
          }}
        </NotesCtnr>
        <AddNoteButton onPress={() => {this.props.navigation.navigate('AddNote')}} />
      </View>
    );
  }
}