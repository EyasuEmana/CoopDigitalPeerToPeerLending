import { StyleSheet, Pressable } from "react-native";
import React from "react";
import { IconButton, Text, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../data/colors";
import { Box } from "native-base";
import { Feather } from "@expo/vector-icons";
import MyTabs from "../components/BottomTab";

export default function Header() {
  return (
    <Box
      //   bg={Colors.main}
      w="full"
      flex
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      //   h={10}
      //   p={5}
    >
      <Feather name="menu" size={20} color={Colors.lightgray} />
      <Text fontWeight={500} fontSize={20} color={Colors.white}>
        Digital Lending
      </Text>
      <Pressable>
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
          top={2}
          left={5}
          bg={Colors.red}
          _text={{
            color: Colors.white,
            fontSize: "9px",
          }}
        >
          5
        </Box>
      </Pressable>
    </Box>
  );
}
