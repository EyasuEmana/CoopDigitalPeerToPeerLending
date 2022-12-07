import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Profile from "../screens/Profile";
import MyForm from "../screens/Form";

const screens = {
  Form: {
    screen: MyForm,
  },
};

const Form = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 60 },
  },
});

export default Form;