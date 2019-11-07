import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeView from './Screens/HomeScreen';
import EmployeeDetailView from './Screens/EmployeeDetailScreen';

const MainNavigator = createStackNavigator({
  HomeView: {screen: HomeView},
  EmployeeDetailView: {screen: EmployeeDetailView},
});

const App = createAppContainer(MainNavigator);

export default App;
