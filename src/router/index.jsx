// In App.js in a new project

import React, {useState, useEffect, useContext} from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Spinner from 'react-native-loading-spinner-overlay';
import LoadingPage from '../pages/LoadingPage';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="loading" component={LoadingPage} />
        </Stack.Group>
    </Stack.Navigator>
  );
}

export default Router;