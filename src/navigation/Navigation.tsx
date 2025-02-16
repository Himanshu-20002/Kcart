
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '@modules/onboard';
import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import Home from '@modules/home';
import { navigationRef } from './NavigationUtil';
const Navigation:FC= () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation