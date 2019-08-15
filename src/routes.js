import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Termos from '~/pages/Termos';

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
      },
      {
        initialRouteName: isSigned ? 'Sign' : 'Sign',
      }
    )
  );
