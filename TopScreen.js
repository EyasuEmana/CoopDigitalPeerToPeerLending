import React from "react";
import { View, Text } from "react-native";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen2 from "./screens/Login2";
import {  useNavigationContainerRef } from '@react-navigation/native';

function TopScreen() {
    const navigationRef = useNavigationContainerRef(); 
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default TopScreen;
