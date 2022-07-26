import React from 'react';
import {Image, ImageBackground, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import CountryScreen from './components/CountryScreen';
import CapitalScreen from './components/CapitalScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="grey" barStyle="light-content" />

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Country" component={CountryScreen} />
        <Stack.Screen name="Capital" component={CapitalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
