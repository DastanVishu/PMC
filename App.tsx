import React, {useEffect} from 'react';
import { PermissionsAndroid, Alert } from 'react-native';
import Router from './src/router/index';
import { NavigationContainer } from '@react-navigation/native';
// import { AuthState } from './src/context/AuthContext';
import messaging from '@react-native-firebase/messaging';
import { getToken, notificationListenr, requestUserPermission } from './src/utils/commonUtils';
function App() {
  
  useEffect(()=> {
    // PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;

  },[])

  useEffect(()=> {
    requestUserPermission();
    notificationListenr();
    getToken();
  },[])

  return (
    <NavigationContainer>
      {/* <AuthState> */}
        <Router />
      {/* </AuthState> */}
    </NavigationContainer>
  );
}

export default App;