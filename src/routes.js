import { createAppContainer, createSwitchNavigator } from 'react-navigation'; //TODO: react-navigation ou @react-navigation/native?

import Home from './pages/Home'
import Login from './pages/Login'
import NewAccount from './pages/NewAccount'

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Home,
    NewAccount
  })
);

export default Routes;