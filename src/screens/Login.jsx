import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2StackStackStack}>
        <View style={styles.rect2StackStack}>
          <View style={styles.rect2Stack}>
            <View style={styles.rect2}>
              <TextInput
                placeholder="Your Name"
                placeholderTextColor="rgba(230, 230, 230,1)"
                textBreakStrategy="simple"
                keyboardAppearance="light"
                style={styles.textInput}
              ></TextInput>
            </View>
            <Image
              source={require("../assets/images/logo.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Text style={styles.loginSignUp}>Login/Sign up:</Text>
          </View>
          <View style={styles.rect}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="rgba(230, 230, 230,1)"
              style={styles.textInput2}
            ></TextInput>
          </View>
          <Text style={styles.name}>Name:</Text>
          <Text style={styles.password}>Password:</Text>
          <Image
            source={require("../assets/images/silly_hacks_logo.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Welcome")}
            style={styles.button2}
          >
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </View>
      <Text style={styles.text}>Or create a new account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250,209,209,1)"
  },
  rect2: {
    width: 215,
    height: 67,
    position: "absolute",
    backgroundColor: "rgba(248,176,176,1)",
    left: 220,
    top: 132
  },
  textInput: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    width: 82,
    height: 22,
    marginTop: 23,
    marginLeft: 7
  },
  image2: {
    left: 0,
    width: 668,
    height: 493,
    position: "absolute",
    opacity: 0.06,
    top: 24
  },
  loginSignUp: {
    top: 0,
    left: 175,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  rect2Stack: {
    top: 89,
    left: 0,
    width: 668,
    height: 517,
    position: "absolute"
  },
  rect: {
    top: 400,
    left: 216,
    width: 213,
    height: 68,
    position: "absolute",
    backgroundColor: "rgba(253,181,181,1)"
  },
  textInput2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    width: 87,
    height: 31,
    fontSize: 16,
    marginTop: 19,
    marginLeft: 24
  },
  name: {
    top: 161,
    left: 200,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  password: {
    top: 334,
    left: 204,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  image: {
    top: 0,
    left: 411,
    width: 108,
    height: 113,
    position: "absolute"
  },
  button2: {
    top: 578,
    left: 235,
    width: 158,
    height: 45,
    position: "absolute",
    backgroundColor: "rgba(252,176,176,1)"
  },
  text: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    width: 190,
    height: 23,
    marginTop: 13,
    marginLeft: 74
  },
  rect2StackStack: {
    top: 34,
    left: 0,
    width: 668,
    height: 623,
    position: "absolute"
  },
  image1: {
    top: 0,
    left: 153,
    width: 80,
    height: 123,
    position: "absolute"
  },
  rect2StackStackStack: {
    width: 668,
    height: 657,
    marginTop: 13,
    marginLeft: -153
  }
});

export default Login;
