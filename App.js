/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import HomeScreen from './Components/HomeInterface';
import Page from './Components/BankInterface';
import User from './Components/UserInterface'
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Bank: {screen: Page},
  User:{screen:User}
},{
  initialRouteName: 'Home',
});

const App = createAppContainer(MainNavigator);

export default App;