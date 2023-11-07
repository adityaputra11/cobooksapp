// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import App from './src/app/App';

function Root() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

export default Root;
