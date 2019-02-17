import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet, StatusBar, AsyncStorage} from 'react-native';
import {signInAnonymously} from '../../services/firebase';
import {fetchNoteDispatch}  from '../../containers/Notes';
class AuthLoading extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {    
    signInAnonymously().then(user => {
      console.log("ffffffffffffffffffffffffffffffff", user.uid)
      if(user){
        this.props.fetchNoteFromUserId(user.uid).then(() => {
          this.props.navigation.navigate('App')
        });
      }
    });
  }
  
  render() {
    return (
      <View style={style.ctnr}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
        <StatusBar barStyle="default" />
      </View>
    );
  }  
}

const style = StyleSheet.create({
  ctnr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default fetchNoteDispatch(AuthLoading);