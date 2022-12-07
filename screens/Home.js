import { StyleSheet } from "react-native";
import React from "react";
import { IconButton, Text, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../data/colors";
import { Box } from "native-base";
import { Feather } from "@expo/vector-icons";
import MyTabs from "../components/BottomTab";
import Profile from "./Profile";
import HomeOptions from "../components/HomeOptions";

const HomeHeader = () => {
  return (
    <Box
      bg={Colors.red}
      w="full"
      flex={1}
      height="full"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      // h={10}
      p={5}
    >
      <Feather name="menu" size={20} color={Colors.lightgray} />
      <Text fontWeight={900} color={Colors.white}>
        Home
      </Text>
      <Pressabele>
        <IconButton
          icon={
            <Ionicons
              name="notifications-outline"
              size={24}
              color={Colors.lightred}
            />
          }
          borderRadius="full"
        />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-13}
          left={2}
          bg={Colors.red}
        ></Box>
      </Pressabele>
    </Box>
  );
};

const Home = ({ navigation }) => {
  return (
    <View
      bg={Colors.lightgray}
      w="full"
      flex={1}
      height="full"
      // flexDirection="row"
      // alignItems="center"
      // justifyContent="space-between"
      // p={5}
    >
      <HomeOptions />
    </View>
  );
};
// const styles=StyleSheet.create({
//     topbar:{
//         flex: 1,
//         flexDirection:"row",
//         alignItems:"center",
//         justifyContent:"space-between",
//         marginLeft:10,
//         marginRight:10

//     }
// })
export default Home;
