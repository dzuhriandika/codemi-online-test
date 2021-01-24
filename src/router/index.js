import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {SplashScreenStack, LoginStack} from './stackNavigator';
import {AppStack} from './tabNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: LoginStack,
      SplashScreen: SplashScreenStack,
      App: AppStack,
    },
    {initialRouteName: 'SplashScreen'},
  ),
);
