import { View,  } from "react-native";
import React from "react";
import { ScrollView, Flex, Text, Heading, Pressable } from "native-base";
import { categories } from "../data/homeCategories";
import Colors from "../data/colors";
const HomeOptions = () => {
  return (
    <ScrollView flex={1}>
      <Flex
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="space-between"
        px={6}
      >
        {categories.map((category) => (
          <Pressable
            key={category}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            // pt={0.3}
            my={3}
            p={6}
            overflow="hidden"
          >
            <Heading size="sm" bold _text={{color:Colors.white}}>
                {category}
            </Heading>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
};

export default HomeOptions;
