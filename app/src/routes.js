import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './screens/Login';
import Cliente from './screens/Register';
import Inicio from './screens/Home';
import Servico from './screens/Worker';
import ListWorker from './screens/ListWorkers';
import Perfil from './screens/Profile';
import Details from './screens/Details';
import Chats from './screens/Chats';
import ChatDetail from './screens/ChatDetail';

const RegisterNav = createBottomTabNavigator({
  Cliente,
  Servico,
});

const Home = createStackNavigator({
  Inicio: {
    screen: Inicio,
    navigationOptions: () => ({
      title: 'Categorias',
    }),
  },
  ListWorker: {
    screen: ListWorker,
    navigationOptions: () => ({
      title: 'Prestadores de serviço',
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      title: 'Detalhes',
    }),
  },
});

const ChatHome = createStackNavigator({
  Chats,
  ChatDetail,
});

const HomeClient = createBottomTabNavigator({
  Home,
  ChatHome,
  Perfil,
});

const HomeWorker = createBottomTabNavigator({
  Perfil,
  Chats,
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
