import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Login from './screens/Login';
import Cliente from './screens/Register';
import Inicio from './screens/Home';
import Servico from './screens/Worker';
import ListWorker from './screens/ListWorkers'
import Perfil from './screens/Profile'

const RegisterNav = createBottomTabNavigator({
  Cliente,
  Servico,
})

const Home = createBottomTabNavigator({
  Inicio,
  Perfil
})

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    RegisterNav,
    Home,
  }),
);

export default Routes;
