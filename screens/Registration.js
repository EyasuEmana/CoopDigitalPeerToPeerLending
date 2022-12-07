import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";

const Registration = ({navigation}) => {
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
        <Text style={styles.welcomeText}>Create your account</Text>
        <Text style={styles.loginText}>Sign up</Text>
        <TextInput
          placeholder="Phone number"
          placeholderTextColor="#808e9b"
          style={styles.input}
          autoCorrect={true}
          autoCompleteType="tel"
          keyboardType="numeric"
          textContentType="telephoneNumber"
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate("otp");
          }}
        >
          <Text style={styles.loginButtonText}>SignUp</Text>
        </TouchableOpacity>
        <View style={styles.signUpTextView}>
          <Text style={styles.signUpText}>Already have account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen2")}>
            <Text style={[styles.signUpText, { color: "#0D98BA" }]}>
              SignIn
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "900",
    color: "#fff",
    alignSelf: "left",
  },
  loginText: {
    color: "#999",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#333",
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#808e9b",
  },
  fpText: {
    alignSelf: "flex-end",
    color: "#0D98BA",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: "#0D98BA",
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fafafa",
    alignSelf: "center",
  },
  loginWithBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  iconButton: {
    backgroundColor: "#333",
    padding: 14,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  signUpTextView: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  signUpText: {
    color: "#808e9b",
    fontSize: 20,
    fontWeight: "500",
  },
});
export default  Registration