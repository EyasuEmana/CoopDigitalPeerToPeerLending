import { View, Text } from "react-native";
import React from "react";
import { Button, Input, Radio, ScrollView, Stack, VStack } from "native-base";
import Colors from "../../data/colors";

const Personal = () => {
  return (
    <VStack
      space={4}
      w="full"
      // maxW="350px"
      mx="auto"
      alignContent="space-between"
      justifyContent="space-between"
    >
      <ScrollView showsVerticalScrollIndicator={false} mt={3} h={500}>
        <Stack space={4} w="full" maxW="350px" mx="auto">
          <Input
            variant="outline"
            size="2xl"
            placeholder="First name"
            _text={{
              color: Colors.red,
            }}
          />
          <Input variant="outline" size="2xl" placeholder="middle name" />
          <Input variant="outline" size="2xl" placeholder="last name" />
          <Input variant="outline" size="2xl" placeholder="state" />
          <Input variant="outline" size="2xl" placeholder="zone" />
          <Input variant="outline" size="2xl" placeholder="age" />
          <Text>Gender</Text>
          <Radio.Group
            name="gender"
            defaultValue="1"
            accessibilityLabel="pick a gender"
          >
            <Stack
              direction="row"
              alignItems={{
                base: "flex-start",
                md: "center",
              }}
              space={4}
              w="75%"
              maxW="300px"
            >
              <Radio value="1" colorScheme="green" size="md" my={1}>
                Male
              </Radio>
              <Radio value="2" colorScheme="green" size="md" my={1}>
                Female
              </Radio>
            </Stack>
          </Radio.Group>
        </Stack>
      </ScrollView>
      <Button>Next</Button>
    </VStack>
  );
};

export default Personal;
