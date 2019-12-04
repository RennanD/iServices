import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './screens/Login';
import Cliente from './screens/Register';
import Inicio from './screens/Home';
import Servico from './screens/Worker';
import ListWorkers from './screens/ListWorkers';
import Attendance from './screens/Attendance';
import Details from './screens/Details';
import Chats from './screens/Chats';
import ChatDetail from './screens/ChatDetail';
import SplashScreen from './screens/SplashScreen';
import Profile from './screens/Profile';
import AttendanceWorker from './screens/AttendanceWorker';
import Complet from './screens/Complet';

const ListWorker = createStackNavigator({
  AttendanceWorker: {
    screen: AttendanceWorker,
    navigationOptions: () => ({
      title: 'Atendimentos',
    }),
  },
  Complet: {
    screen: Complet,
    navigationOptions: () => ({
      title: 'Detalhes do atendimento',
    }),
  },
});

const RegisterNav = createBottomTabNavigator(
  {
    Cliente,
    Servico,
  },
  {
    tabBarOptions: {
      activeTintColor: '#fefefe',
      inactiveTintColor: '#999',
      labelStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
      },
      style: {
        backgroundColor: '#1976d2',
      },
    },
  },
);

const Home = createStackNavigator({
  Inicio: {
    screen: Inicio,
    navigationOptions: () => ({
      title: 'Categorias',
    }),
  },
  ListWorkers: {
    screen: ListWorkers,
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
  Chats: {
    screen: Chats,
    navigationOptions: () => ({
      title: 'Chats ativos',
    }),
  },
  ChatDetail: {
    screen: ChatDetail,
    navigationOptions: () => ({
      title: 'Chat iniciado',
    }),
  },
  Attendance: {
    screen: Attendance,
    navigationOptions: () => ({
      title: 'Finalizar atendimento',
    }),
  },
});

const HomeClient = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: 'Íníco',
      }),
    },
    ChatHome: {
      screen: ChatHome,
      navigationOptions: () => ({
        title: 'Bate-Papos',
      }),
    },
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        title: 'Perfil',
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#fefefe',
      inactiveTintColor: '#999',
      labelStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
      },
      style: {
        backgroundColor: '#1976d2',
      },
    },
  },
);

const HomeWorker = createBottomTabNavigator(
  {
    Attendances: {
      screen: ListWorker,
      navigationOptions: () => ({
        title: 'Atendimentos',
      }),
    },
    ChatHome: {
      screen: ChatHome,
      navigationOptions: () => ({
        title: 'Bate-Papos',
      }),
    },
    Profiles: {
      screen: Profile,
      navigationOptions: () => ({
        title: 'Perfil',
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#fefefe',
      inactiveTintColor: '#999',
      labelStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
      },
      style: {
        backgroundColor: '#1976d2',
      },
    },
  },
);

const Routes = createAppContainer(
  createSwitchNavigator({
    SplashScreen,
    Login,
    RegisterNav,
    HomeClient,
    HomeWorker,
  }),
);

export default Routes;
