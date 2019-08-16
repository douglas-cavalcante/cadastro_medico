import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Termos from '~/pages/Termos';

import Dashboard from '~/pages/Dashboard';
import CustomDrawerContentComponent from './components/Drawer';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createStackNavigator(
          {
            SignIn,
            SignUp,
            Termos,
          },
          {
            defaultNavigationOptions: {
              headerStyle: {
                backgroundColor: '#00BFFF',
              },
              headerTitleStyle: {
                color: '#FFF',
                fontWeight: 'bold',
              },
            },
          }
        ),
        App: createDrawerNavigator(
          {
            Dashboard,
          },
          {
            contentComponent: CustomDrawerContentComponent,
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
