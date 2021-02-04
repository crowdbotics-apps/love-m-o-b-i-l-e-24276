import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings201218Navigator from '../features/Settings201218/navigator';
import Settings201216Navigator from '../features/Settings201216/navigator';
import SignIn2201214Navigator from '../features/SignIn2201214/navigator';
import Settings200721Navigator from '../features/Settings200721/navigator';
import UserProfile200714Navigator from '../features/UserProfile200714/navigator';
import Settings200713Navigator from '../features/Settings200713/navigator';
import Settings200711Navigator from '../features/Settings200711/navigator';
import SignIn2200709Navigator from '../features/SignIn2200709/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings201218: { screen: Settings201218Navigator },
Settings201216: { screen: Settings201216Navigator },
SignIn2201214: { screen: SignIn2201214Navigator },
Settings200721: { screen: Settings200721Navigator },
UserProfile200714: { screen: UserProfile200714Navigator },
Settings200713: { screen: Settings200713Navigator },
Settings200711: { screen: Settings200711Navigator },
SignIn2200709: { screen: SignIn2200709Navigator },

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
