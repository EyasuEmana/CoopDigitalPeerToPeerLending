import { View, Text } from "react-native";
import React from "react";
import { Button, Input, Radio, ScrollView, Stack, VStack } from "native-base";
import Colors from "../../data/colors";

const Financial = () => {
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
            placeholder="your CBO account num."
          />
          <VStack>
            <Text>Select Entry catetory</Text>
            <Radio.Group
              name="entry_Category"
              defaultValue="1"
              accessibilityLabel="pick a category"
            >
              <Stack
                direction="row"
                alignItems={{
                  base: "flex-start",
                  md: "center",
                }}
                space={2}
                w="75%"
                maxW="300px"
              >
                <Radio value="1" colorScheme="green" size="md" my={1}>
                  Lender
                </Radio>
                <Radio value="2" colorScheme="green" size="md" my={1}>
                  Borrower
                </Radio>
              </Stack>
            </Radio.Group>
          </VStack>
          <VStack bg="#DDD" p={3}>
            <Text _text={{fontSize:"15px"}}>Your income interval per-month (Birr)</Text>
            <Radio.Group
              name="entry_Category"
              defaultValue="1"
              accessibilityLabel="pick a category"
            >
              <Stack
                direction="column"
                alignItems={{
                  base: "flex-start",
                  md: "center",
                }}
                space={2}
                w="75%"
                maxW="300px"
              >
                <Radio value="1" colorScheme="green" size="md" my={1}>
                  Above 1,000,000
                </Radio>
                <Radio value="2" colorScheme="green" size="md" my={1}>
                  from 100,000 to 1,000,000
                </Radio>
                <Radio value="3" colorScheme="green" size="md" my={1}>
                  from 10,000 to 100,000
                </Radio>
                <Radio value="4" colorScheme="green" size="md" my={1}>
                  Below 10,000
                </Radio>
              </Stack>
            </Radio.Group>
          </VStack>
          <Input variant="outline" size="2xl" placeholder="last name" />
          <Input
            variant="outline"
            size="2xl"
            placeholder="First name"
            _text={{
              color: Colors.red,
            }}
          />
        </Stack>
      </ScrollView>
      <Button>Next</Button>
    </VStack>
  );
};

export default Financial;
