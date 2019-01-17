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

    _deleteNote = () => {
      this.props.deleteNote(this.state.index);
      this.props.navigation.navigate('Home');
    }

    render() {
      return (
          <View style={styles.mainCtnr}>
            <View style={styles.inputCtnr}>
              <TextInput placeholder="Add your notes"
                onChangeText={this._onChangeText}
                autoFocus={true}
                multiline={true}
                numberOfLines={4}
                value={this.state.note} />
            </View>
            <View style={styles.ctnr}>
              {this.state.index !== '' && 
                <TouchableOpacity onPress={this._deleteNote}
                  style={styles.deleteBtn}>
                  <Icon name='trash' size={20} color="#fff"></Icon>
                </TouchableOpacity>
              }
              <TouchableOpacity onPress={this._saveNote}
                style={styles.saveBtn}>
                <Icon name='check' size={20} color="#fff"></Icon>
              </TouchableOpacity>
            </View>
          </View>
      )
    }
}

const styles = StyleSheet.create({
  mainCtnr: {
    flex: 1
  },
  inputCtnr:{
    padding: 10
  },
  ctnr: {
    position: "absolute",
    bottom:0,
    right:0,
    flex:1,
    marginBottom: 20
  },
  saveBtn: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(63, 186, 18, 1)',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    borderRadius:100,
    marginTop: 20
  },
  deleteBtn: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    backgroundColor: 'red',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    borderRadius:100
  }
});
