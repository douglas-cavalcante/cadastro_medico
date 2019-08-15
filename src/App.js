import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import NavigationService from './services/navigation';

import createRouter from './routes';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF80AB',
  },
};

const App = () => {
  const Routes = createRouter();
  return (
    <PaperProvider theme={theme}>
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </PaperProvider>
  );
};

export default App;
