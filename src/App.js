import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import NavigationService from './services/navigation';

import createRouter from './routes';

import { checkLogin } from './store/modules/auth/actions';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF80AB',
  },
};

const App = () => {
  const dispatch = useDispatch();
  const signed = useSelector(state => state.auth.signed);
  const Routes = createRouter(signed);

  useEffect(() => {
    dispatch(checkLogin());
  });

  return (
    <PaperProvider theme={theme}>
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </PaperProvider>
  );
};

export default App;
