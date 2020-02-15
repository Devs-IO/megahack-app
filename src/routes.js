
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home'
import Login from './pages/Login'
import NewAccount from './pages/NewAccount'

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Login,
    NewAccount
  })
);

export default Routes;