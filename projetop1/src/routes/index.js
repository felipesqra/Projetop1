import * as React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import { options } from './options'

import {
  HOME_SCREEN,
  CARD_SCREEN
} from '../constants/screens'

// Screens
import HomeScreen from '../screens/Home'
import CardScreen from '../screens/Card'

const Stack = createStackNavigator()

const RootStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={HOME_SCREEN} screenOptions={options}>
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen}/>
      <Stack.Screen name={CARD_SCREEN} component={CardScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
)


export default RootStack
