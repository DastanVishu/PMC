// In App.js in a new project

import React, {useState, useEffect, useContext} from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Spinner from 'react-native-loading-spinner-overlay';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Spin (props) {
  return <View>
    <Spinner visible={true} />
  </View>
}

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="spin" component={Spin} />
        </Stack.Group>
    </Stack.Navigator>
  );
}

export default Router;