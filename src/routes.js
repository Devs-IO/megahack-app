import { createAppContainer, createSwitchNavigator } from "react-navigation"; //TODO: react-navigation ou @react-navigation/native?

import Home from "./pages/Home";
import Login from "./pages/Login";
import NewAccount from "./pages/NewAccount";
import Profile from "./pages/Profile";
import Pay from "./pages/Pay";
import Intro from "./pages/Intro";

const Routes = createSwitchNavigator({
  
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null
    }
  },
  Home,
  NewAccount,
  Pay,
  Intro
});

const AppContainer = createAppContainer(Routes);

export default AppContainer;
