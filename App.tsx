import * as React from 'react';
import Router from './src/router/index';
import { NavigationContainer } from '@react-navigation/native';
// import { AuthState } from './src/context/AuthContext';

function App() {
  
  return (
    <NavigationContainer>
      {/* <AuthState> */}
        <Router />
      {/* </AuthState> */}
    </NavigationContainer>
  );
}

export default App;