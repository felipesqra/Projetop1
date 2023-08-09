import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Card from './screens/Card';


const Stack = createStackNavigator();


const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Card" component={Card}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Main;