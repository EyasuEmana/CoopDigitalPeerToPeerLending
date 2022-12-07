import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Profile from "../screens/Profile";
// import Form from "../screens/Form";
import Home from "../screens/Home";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import Form from "../screens/Form"
const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" flex={1}>
      <Tab.Screen
        name="Add Form"
        component={Form}
        options={{
          tabBarLabel: "Form",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-circle-outline" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color="white" />
          ),
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
