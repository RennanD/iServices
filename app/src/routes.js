import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Worker from './screens/Worker';

const RegisterNav = createAppContainer(
  createBottomTabNavigator({
    Register,
    Worker,
  }),
);

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    RegisterNav,
    Home,
  }),
);

export default Routes;
