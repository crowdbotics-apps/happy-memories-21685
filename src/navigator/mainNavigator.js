import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial148400Navigator from '../features/Tutorial148400/navigator';
import NotificationList148372Navigator from '../features/NotificationList148372/navigator';
import Settings148371Navigator from '../features/Settings148371/navigator';
import Settings148363Navigator from '../features/Settings148363/navigator';
import UserProfile148361Navigator from '../features/UserProfile148361/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial148400: { screen: Tutorial148400Navigator },
NotificationList148372: { screen: NotificationList148372Navigator },
Settings148371: { screen: Settings148371Navigator },
Settings148363: { screen: Settings148363Navigator },
UserProfile148361: { screen: UserProfile148361Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
