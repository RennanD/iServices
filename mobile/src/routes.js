import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'

const Routes = createAppContainer(createSwitchNavigator({
    Login,
    Register,
    Home
}))

export default Routes