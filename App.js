import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/home';
import DetailsScreen from './src/screens/details'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()



function App() {

  return (
      // <Provider store={store}>
        <NavigationContainer >
        <Stack.Navigator initialRouteName="HomeScreen" headerMode={false}>
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="Details" component={DetailsScreen}/>
        </Stack.Navigator>
        </NavigationContainer>
      // </Provider>
  );
}

export default App;
