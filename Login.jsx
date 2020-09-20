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
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Welcome")}
          style={styles.button2}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Or create a new account</Text>
      </View>
      <View style={styles.image1Row}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <Image
          source={require("../assets/images/silly_hacks_logo.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <Text style={styles.loginSignUp}>Login/Sign up:</Text>
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
    left: 231,
    top: 70
  },
  textInput: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    width: 82,
    height: 22,
    marginTop: 22,
    marginLeft: 7
  },
  image2: {
    top: 0,
    left: 0,
    width: 668,
    height: 565,
    position: "absolute",
    opacity: 0.06
  },
  rect2Stack: {
    top: 0,
    left: 0,
    width: 668,
    height: 565,
    position: "absolute"
  },
  rect: {
    top: 248,
    left: 227,
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
    top: 10,
    left: 211,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  password: {
    top: 183,
    left: 215,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  button2: {
    top: 426,
    left: 246,
    width: 158,
    height: 45,
    position: "absolute",
    backgroundColor: "rgba(252,176,176,1)"
  },
  text: {
    top: 484,
    left: 238,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    width: 190,
    height: 23
  },
  rect2StackStack: {
    width: 668,
    height: 565,
    marginTop: 249,
    marginLeft: -142
  },
  image1: {
    width: 80,
    height: 123
  },
  image: {
    width: 108,
    height: 113,
    marginLeft: 178,
    marginTop: 34
  },
  image1Row: {
    height: 147,
    flexDirection: "row",
    marginTop: -801,
    marginRight: 48
  },
  loginSignUp: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 26,
    marginLeft: 44
  }
});

export default Login;
