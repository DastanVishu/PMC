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
      let notif = remoteMessage.notification;
      // notif?.android?.imageUrl
      notif?.body
      notif?.title
      


      Alert.alert(`${notif?.title}`, `${notif?.body}`);
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