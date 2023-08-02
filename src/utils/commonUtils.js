import messaging from '@react-native-firebase/messaging';

export const requestUserPermission = async () => {
    const authorizationStatus = await messaging().requestPermission();
    const enabled =
    authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log('Permission status:', authorizationStatus);
    }
}

export const notificationListenr = () => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });
  
    // Check whether an initial notification is available
    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
        if (remoteMessage) {
        console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
        );
        // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
    });
}

export const getToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();

    console.log("token: ", token);
    return token
}