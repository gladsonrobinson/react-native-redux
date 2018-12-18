import React , {PureComponent} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';

export default class AddEditNote extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            note: ''
        }
    }

    _onChangeText = text => {
        this.setState({
            note: text
        });
    }

    _saveNote = () => {
        this.props.addNote(this.state.note);
        this.props.navigation.navigate('Home');
    }


    render() {
        return (
            <View>
                <TextInput placeholder="Add your notes"
                    onChangeText={this._onChangeText}
                    autoFocus={true}></TextInput>
                <Button title="SAVE"
                    onPress={this._saveNote}/>
            </View>
        )
    }
}