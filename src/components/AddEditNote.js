import React , {PureComponent} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const min = 1;
const max = 100;
export default class AddEditNote extends PureComponent {
    constructor(props) {
        super(props);

        const note = this.props.navigation.getParam('note', '');
        const index = this.props.navigation.getParam('index', '');
        this.state = {
            note,
            index
        };
    }

    _onChangeText = note => {
      this.setState({
          note
      });
    }

    _saveNote = () => {
      const randID = (min + Math.random() * (max - min)).toString();
      if(this.state.index !== '') {
          this.props.editNote(this.state.note, this.state.index);
      }  else {
          this.props.addNote(this.state.note, randID);
      }
      
      this.props.navigation.navigate('Home');
    }

    render() {
      return (
          <>
            <View style={styles.mainCtnr}>
              <TextInput placeholder="Add your notes"
                onChangeText={this._onChangeText}
                autoFocus={true}
                multiline={true}
                numberOfLines={4}
                value={this.state.note} />
            </View>
            <View style={styles.ctnr}>
              <TouchableOpacity onPress={this._saveNote}
                style={styles.saveBtn}>
                <Icon name='check' size={20} color="#fff"></Icon>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._saveNote}
                style={styles.deleteBtn}>
                <Icon name='trash' size={20} color="#fff"></Icon>
              </TouchableOpacity>
            </View>
          </>
      )
    }
}

const styles = StyleSheet.create({
  ctnr: {
    position: "absolute",
    top: 0,
    bottom:0,
    right:0
  },
  saveBtn: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(183, 28, 27, .7)',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    borderRadius:100,
    //position: "absolute",
    //bottom: 5,
    //right: 5
  },
  deleteBtn: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(183, 28, 27, .7)',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    borderRadius:100,
    //position: "absolute",
    //bottom: 5,
    //right: 5
  }
});
