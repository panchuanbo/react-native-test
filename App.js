import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeView from './Screens/HomeScreen';
import EmployeeDetailView from './Screens/EmployeeDetailScreen';
import FormView from './Screens/FormScreen';

const MainNavigator = createStackNavigator({
  HomeView: {screen: HomeView},
  EmployeeDetailView: {screen: EmployeeDetailView},
  FormView: {screen: FormView},
});

const App = createAppContainer(MainNavigator);

export default App;
