
import {createStackNavigator, createAppContainer} from 'react-navigation';

import {Home} from '../pages';

const App = createStackNavigator({
    Home: {screen: Home}
});

export default createAppContainer(App);