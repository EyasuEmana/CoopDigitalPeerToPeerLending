import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import {
  NativeBaseProvider,
  Box,
  Text,
  Center,
  useColorModeValue,
} from "native-base";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./OTPRequest";
import Personal from "../components/kycComponents/personal";
import Financial from "../components/kycComponents/financial";
import Mailing from "../components/kycComponents/mailing";
import Others from "../components/kycComponents/others";
const FirstRoute = () => (
  <Center flex={1} my="4">
    This is Tab 1
  </Center>
);

const SecondRoute = () => (
  <Center flex={1} my="4">
    This is Tab 2
  </Center>
);

const ThirdRoute = () => (
  <Center flex={1} my="4">
    This is Tab 3
  </Center>
);

const FourthRoute = () => (
  <Center flex={1} my="4">
    This is Tab 4{" "}
  </Center>
);

const initialLayout = {
  width: Dimensions.get("window").width,
};
const renderScene = SceneMap({
  first: Personal,
  second: Financial,
  third: Mailing,
  fourth: Others,
});

export default function UserKYC() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      title: "Personal",
    },
    {
      key: "second",
      title: "Financial",
    },
    {
      key: "third",
      title: "Mailing",
    },
    {
      key: "fourth",
      title: "Others",
    },
  ]);

  const renderTabBar = (props) => {
    // const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
        //   const opacity = props.position.interpolate({
        //     inputRange,
        //     outputRange: inputRange.map((inputIndex) =>
        //       inputIndex === i ? 1 : 0.5
        //     ),
        //   });
          const color =
            index >= i
            ? "cyan.500"
            : useColorModeValue("coolGray.600", "gray.900");

          const borderColor =
            index >= i
              ? "cyan.500"
              : useColorModeValue("coolGray.200", "gray.400");
          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer"
            >
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}
              >
                <Text color={color} fontSize={16} fontWeight="semibold"
                //   style={{
                //     color:color
                //   }}
                >
                  {route.title}
                </Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      {/* <LinearGradient
        colors={["#222", "#222", "#111"]}
        style={styles.container}
      > */}
        <TabView
          navigationState={{
            index,
            routes,
          }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        //   style={{
        //     marginTop: StatusBar.currentHeight,
        //   }}
        />
      {/* </LinearGradient> */}
    </TouchableWithoutFeedback>
  );
}
