import HomeView from './Screens/Home';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  HomeView: {screen: HomeView},
});

const App = createAppContainer(MainNavigator);

export default App;
