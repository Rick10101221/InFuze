import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Center } from "@builderx/utils";

function Signup(props) {
  return (
    <View style={styles.container}>
      <Center horizontal>
        <View style={styles.rect}></View>
      </Center>
      <View style={styles.rect2}></View>
      <Text style={styles.name}>Name:</Text>
      <Text style={styles.password}>Password:</Text>
      <Image
        source={require("../assets/images/silly_hacks_logo.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Login")}
        style={styles.button2}
      ></TouchableOpacity>
      <Text style={styles.text}>Signup</Text>
      <Text style={styles.text}>Already have an account?Login</Text>
      <TextInput
        placeholder="Your Name"
        placeholderTextColor="rgba(230, 230, 230,1)"
        textBreakStrategy="simple"
        keyboardAppearance="light"
        style={styles.textInput}
      ></TextInput>
      <TextInput
        placeholder="Password"
        placeholderTextColor="rgba(230, 230, 230,1)"
        style={styles.textInput2}
      ></TextInput>
      <View style={styles.rect3}></View>
      <Text style={styles.email}>Email:</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="rgba(230, 230, 230,1)"
        style={styles.textInput3}
      ></TextInput>
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250,209,209,1)"
  },
  rect: {
    top: 227,
    width: 226,
    height: 67,
    position: "absolute",
    backgroundColor: "rgba(248,176,176,1)"
  },
  rect2: {
    top: 357,
    left: 73,
    width: 213,
    height: 68,
    position: "absolute",
    backgroundColor: "rgba(253,181,181,1)"
  },
  name: {
    top: 193,
    left: 73,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  password: {
    top: 322,
    left: 73,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  image: {
    top: 46,
    left: 251,
    width: 108,
    height: 113,
    position: "absolute"
  },
  image1: {
    top: 13,
    left: 0,
    width: 80,
    height: 123,
    position: "absolute"
  },
  button2: {
    top: 675,
    left: 104,
    width: 158,
    height: 45,
    position: "absolute",
    backgroundColor: "rgba(252,176,176,1)"
  },
  text: {
    top: 730,
    left: 68,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    width: 244,
    height: 34
  },
  textInput: {
    top: 250,
    left: 87,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    width: 82,
    height: 22
  },
  textInput2: {
    top: 375,
    left: 87,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    width: 87,
    height: 31,
    fontSize: 16
  },
  rect3: {
    top: 489,
    left: 73,
    width: 213,
    height: 68,
    position: "absolute",
    backgroundColor: "rgba(253,181,181,1)"
  },
  email: {
    top: 446,
    left: 76,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  textInput3: {
    top: 507,
    left: 87,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    width: 87,
    height: 31,
    fontSize: 16
  },
  image2: {
    top: 158,
    left: -130,
    width: 668,
    height: 565,
    position: "absolute",
    opacity: 0.06
  }
});

export default Signup;
