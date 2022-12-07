import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen2 from '../screens/Login2';
// import About from '../screens/Profile';
// import Report from "../screens/Form"
import BottomTabs from '../components/BottomTab';
import { createAppContainer } from 'react-navigation';
import Form from './ProfileStack';
import Header from '../components/Header';
import Colors from '../data/colors';
import Registration from '../screens/Registration';
import OTPRequest from '../screens/OTPRequest';
import UserKYC from '../screens/UserKYC';
const screens = {
  LoginScreen2: {
    screen: LoginScreen2,
    navigationOptions: {
        headerShown: false,
    }
  },
  Registration: {
    screen: Registration,
    navigationOptions: {
        headerShown: false,
    }
  },
  otp: {
    screen: OTPRequest,
    navigationOptions: {
        headerShown: false,
    }
  },
  kyc: {
    screen: UserKYC,
    navigationOptions: {
        headerShown: false,
    }
  },
  Home: {
    screen: BottomTabs,
    navigationOptions:{
      headerMode: 'screen',
      headerTintColor: 'white',
      headerStyle: { backgroundColor:Colors.main },
      headerTitle:()=><Header/>
    }
    // navigationOptions: ({ navigation }) => {
    //   return {
    //     headerShown: false
    //   }
    // },
  },
  
  // Form: {
  //   screen: Form,
  //   navigationOptions: {
  //       headerShown: false,
  //   }
  // },
};

// home stack navigator screens
const HomeStack =  createAppContainer(createStackNavigator(screens, {
    initialRouteName:"kyc",
    headerShown: false,
    defaultNavigationOptions: {
      // headerTintColor: '#444',
      // headerStyle: { backgroundColor: '#eee', height: 60 }
    }
  }))

export default HomeStack;


