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

function Login(props) {
  return (
    <View style={styles.container}>
      <Center horizontal>
        <View style={styles.rect2}></View>
      </Center>
      <View style={styles.rect}></View>
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
        onPress={() => props.navigation.navigate("Welcome")}
        style={styles.button2}
      ></TouchableOpacity>
      <Text style={styles.login}>Login</Text>
      <Text style={styles.text}>Or create a new account</Text>
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
  rect2: {
    top: 275,
    width: 226,
    height: 67,
    position: "absolute",
    backgroundColor: "rgba(248,176,176,1)"
  },
  rect: {
    top: 406,
    left: 73,
    width: 213,
    height: 68,
    position: "absolute",
    backgroundColor: "rgba(253,181,181,1)"
  },
  name: {
    top: 233,
    left: 73,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  password: {
    top: 360,
    left: 73,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  image: {
    top: 47,
    left: 258,
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
  login: {
    top: 682,
    left: 153,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 23
  },
  text: {
    top: 733,
    left: 96,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    width: 190,
    height: 23
  },
  textInput: {
    top: 297,
    left: 96,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    width: 82,
    height: 22
  },
  textInput2: {
    top: 425,
    left: 100,
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

export default Login;
