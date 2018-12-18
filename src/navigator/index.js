
import {createStackNavigator, createAppContainer} from 'react-navigation';

import {Home, AddNote} from '../pages';

const App = createStackNavigator({
    Home: {screen: Home},
    AddNote: {screen: AddNote}
});

export default createAppContainer(App);