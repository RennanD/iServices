import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Login from './screens/Login';
import Cliente from './screens/Register';
import Inicio from './screens/Home';
import Servico from './screens/Worker';
import ListWorker from './screens/ListWorkers';
import Perfil from './screens/Profile';
import Details from './screens/Details';
import Chat from './screens/Chats';

const RegisterNav = createBottomTabNavigator({
  Cliente,
  Servico,
});

const Home = createSwitchNavigator({
  Inicio,
  ListWorker,
  Details,
});

const HomeClient = createBottomTabNavigator({
  Home,
  Chat,
  Perfil,
});

const HomeWorker = createBottomTabNavigator({
  Perfil,
  Chat,
});

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    RegisterNav,
    HomeClient,
    HomeWorker,
  }),
);

export default Routes;
