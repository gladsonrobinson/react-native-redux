import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Home, AddNote} from '../pages';
import {CustomHeader} from '../components';

const App = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        //header: props => <CustomHeader {...props} />,
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
    },
});

export default createAppContainer(App);