import React from 'react';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Home, AddNote, AuthLoading, SignIn} from '../pages';
import {CustomHeader} from '../components';

const appStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "NOTES",
      headerTintColor: "#fff",
      animationEnabled: true,
      headerStyle: {
        backgroundColor: '#0FACBD',
      },
    }
  },
  AddNote: {
    screen: AddNote,
    navigationOptions: {
      title: "ADD NOTES",
      animationEnabled: true,
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: '#0FACBD'
      }
    }
  } 
});

const authStack = createStackNavigator({
  SignIn: SignIn
});

const App = createSwitchNavigator({
  AuthLoading: AuthLoading,
  App: appStack,
  Auth: authStack
},{
  initialRouteName: 'AuthLoading'
});

export default createAppContainer(App);