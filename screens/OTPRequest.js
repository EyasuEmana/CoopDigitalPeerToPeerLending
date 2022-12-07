import {
  Center,
  Heading,
  View,
  Text,
  Divider,
  VStack,
  Button,
} from "native-base";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React, { useState, useEffect } from "react";
import OTPInput from "react-native-otp-input-fields";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../data/colors";
const OTPRequest = ({navigation}) => {
  const [OTP, SetOTP] = useState("");
  const [second, setsecond] = useState(59);
  const [minute, setminute] = useState(2);
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setsecond(second - 1);

      if (second === 0) {
        setminute(minute - 1);
        setsecond(59);
      }
    }, [1000]);
    return () => clearInterval(timer);
  });
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <LinearGradient
        colors={["#222", "#222", "#111"]}
        style={styles.container}
      >
        <VStack space={4}>
          <Heading color={Colors.white}>
            We have sent otp to your phone +2519****6471
          </Heading>
          <Divider my="2" color={Colors.lightgray} />
          <View w="80">
            <OTPInput
              onChangeText={SetOTP}
              value={OTP}
              borderBottom={5}
              onlyBorderBottom={true}
              allowDigitsOnly={true}
              containerWidth="90%"
              boxBackgroundColor="#888"
            />
          </View>
          <Text fontSize="md" color={Colors.main}>
            Message will reach you in {minute}:{second}
          </Text>
          <Button
          onPress={()=>navigation.navigate("kyc")}
            _text={{
              color: "#FFF",
              fontSize: "20px",
            }}
          >
            Continue
          </Button>
        </VStack>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
export default OTPRequest;
