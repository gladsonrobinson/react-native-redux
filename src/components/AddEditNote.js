import React , {PureComponent} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';

export default class AddEditNote extends PureComponent {
    //const _onChangeText = text => notevalue = text;
    constructor(props) {
        super(props);

        this.state = {
            note: ''
        }
        //console.log("helloooooooooooo",this.props)
    }

    _onChangeText = text => {
        this.setState({
            note: text
        });
    }

    _saveNote = () => {
         console.log("gladsssssssssssssssss",this.state.note)
        this.props.addNote(this.state.note)
    }


    render() {
        return (
            <View>
                <TextInput placeholder="Add your notes"
                    onChangeText={this._onChangeText}></TextInput>
                <Button title="SAVE"
                    onPress={this._saveNote}/>
            </View>
        )
    }
}