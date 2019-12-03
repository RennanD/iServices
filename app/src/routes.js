import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './screens/Login';
import Cliente from './screens/Register';
import Inicio from './screens/Home';
import Servico from './screens/Worker';
import ListWorker from './screens/ListWorkers';
import Attendance from './screens/Attendance';
import Details from './screens/Details';
import Chats from './screens/Chats';
import ChatDetail from './screens/ChatDetail';
import SplashScreen from './screens/SplashScreen'

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
  Chats: {
    screen: Chats,
    navigationOptions: () => ({
      title: "Chats ativos"
    })
  },
  ChatDetail: {
    screen: ChatDetail,
    navigationOptions: () => ({
      title: "Chat iniciado"
    })
  },
  Attendance: {
    screen: Attendance,
    navigationOptions: () => ({
      title: "Finalizar atendimento"
    })
  }
});

const HomeClient = createBottomTabNavigator({
  Home,
  ChatHome,
});

const HomeWorker = createBottomTabNavigator({
  Chats,
});

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
