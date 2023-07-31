// In App.js in a new project

import React, {useState, useEffect, useContext} from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Spinner from 'react-native-loading-spinner-overlay';
import GPD from '../pages/GetAppointmentDate';
import BookApointment from '../pages/BookApointment';
import OtpPage from '../pages/OtpPage';
import Thankyou from '../pages/Thankyou';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Router = () => {

  return (
    <Stack.Navigator>
        <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="Get Apointment Date" component={GPD} />
            <Stack.Screen name="Book Apointment" component={BookApointment} />
            <Stack.Screen name="OTP" component={OtpPage} />
            <Stack.Screen name="Thankyou" component={Thankyou} />
        </Stack.Group>
    </Stack.Navigator>
  );
}

export default Router;