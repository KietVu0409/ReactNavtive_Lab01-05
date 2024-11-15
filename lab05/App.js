import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import Screen01 from './components/Screen01'
import Screen02 from './components/Screen02'
import Screen03 from './components/Screen03'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen01' component={Screen01} options={{ headerShown: false }}/>
        <Stack.Screen name='Screen02' component={Screen02} options={{ headerShown: false }}/>
        <Stack.Screen name='Screen03' component={Screen03} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
