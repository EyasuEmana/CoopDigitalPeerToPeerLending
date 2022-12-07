import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen4 from "./screens/Login";
import LoginScreen2 from "./screens/Login2";
import TopScreen from "./TopScreen";
import { useNavigationContainerRef } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./screens/Home";
import { useEffect, useState } from "react";
import { NativeBaseProvider } from "native-base";
import History from "./screens/Form";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BottomTabs from "./components/BottomTab";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeStack from "./routes/stackRoute";
import Colors from "./data/colors";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [signIn, setsignIn] = useState(true);
  const [refLoaded, setrefLoaded] = useState(false);
  const navigationRef = useNavigationContainerRef();
  const Tab = createMaterialBottomTabNavigator();

  useEffect(() => {
    setrefLoaded(true);
    console.log("ref", navigationRef);
  }, [navigationRef.isReady]);

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar hidden={true} />
          <NativeBaseProvider>
            <HomeStack />
              {/* <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                  name="Login"
                  component={LoginScreen2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="About"
                  component={About}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="History"
                  component={History}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Home"
                  component={BottomTabs}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator> */}
          </NativeBaseProvider>
        </NavigationContainer>{" "}
      </SafeAreaProvider>
    </>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: Colors.lightgray },
});
