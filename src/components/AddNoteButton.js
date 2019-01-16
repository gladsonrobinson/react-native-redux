import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddNoteButton extends React.Component {
  render() {
    return(
      <TouchableOpacity onPress={this.props.onPress}
        style={styles.addNoteBtn}>
        <Icon name='plus' size={20} color="#fff"></Icon>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  addNoteBtn: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(183, 28, 27, .7)',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    borderRadius:100,
    position: "absolute",
    bottom: 5,
    right: 5
  }
});