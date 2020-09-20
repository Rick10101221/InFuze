import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

function Signup(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStackStack}>
        <View style={styles.rectStack}>
          <View style={styles.rect}>
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
        <View style={styles.rect2}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(230, 230, 230,1)"
            style={styles.textInput2}
          ></TextInput>
        </View>
        <Text style={styles.name}>Name:</Text>
        <Text style={styles.password}>Password:</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={styles.button2}
        >
          <Text style={styles.text}>Signup</Text>
        </TouchableOpacity>
        <View style={styles.rect3}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(230, 230, 230,1)"
            style={styles.textInput3}
          ></TextInput>
        </View>
        <Text style={styles.email}>Email:</Text>
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
      <Text style={styles.text}>Already have an account?Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250,209,209,1)"
  },
  rect: {
    top: 25,
    width: 226,
    height: 67,
    position: "absolute",
    backgroundColor: "rgba(248,176,176,1)",
    left: 188
  },
  textInput: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    width: 82,
    height: 22,
    marginTop: 12,
    marginLeft: 7
  },
  image2: {
    top: 0,
    width: 668,
    height: 565,
    position: "absolute",
    opacity: 0.06,
    left: 0
  },
  rectStack: {
    top: 30,
    left: 0,
    width: 668,
    height: 565,
    position: "absolute"
  },
  rect2: {
    top: 236,
    left: 188,
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
    marginLeft: 4
  },
  name: {
    top: 0,
    left: 172,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  password: {
    top: 174,
    left: 165,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  button2: {
    top: 529,
    left: 231,
    width: 158,
    height: 45,
    position: "absolute",
    backgroundColor: "rgba(252,176,176,1)"
  },
  text: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    width: 244,
    height: 34,
    marginTop: 651,
    marginLeft: 73
  },
  rect3: {
    top: 411,
    left: 194,
    width: 213,
    height: 68,
    position: "absolute",
    backgroundColor: "rgba(253,181,181,1)"
  },
  textInput3: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    width: 87,
    height: 31,
    fontSize: 16,
    marginTop: 3,
    marginLeft: 6
  },
  email: {
    top: 358,
    left: 188,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  rectStackStack: {
    width: 668,
    height: 595,
    marginTop: 215,
    marginLeft: -127
  },
  image1: {
    width: 80,
    height: 123
  },
  image: {
    width: 108,
    height: 113,
    marginLeft: 171,
    marginTop: 33
  },
  image1Row: {
    height: 146,
    flexDirection: "row",
    marginTop: -797,
    marginRight: 55
  }
});

export default Signup;
