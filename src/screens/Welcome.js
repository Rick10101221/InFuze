import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import { Center } from "@builderx/utils";

function Welcome(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        source={require("../assets/images/drink1.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
      <Center horizontal>
        <Text style={styles.inFuze}>In-Fuze</Text>
      </Center>
      <Text style={styles.welcome3}>Welcome</Text>
      <Text style={styles.to2}>To</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Page1")}
        style={styles.button}
      ></TouchableOpacity>
      <Text style={styles.letsBegin}>Lets Begin</Text>
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        style={styles.image4}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(242,138,138,1)",
    opacity: 0.7
  },
  image: {
    top: -14,
    left: -433,
    width: 997,
    height: 977,
    position: "absolute",
    opacity: 0.42,
    backgroundColor: "#fff"
  },
  image2: {
    top: 13,
    left: 0,
    width: 80,
    height: 123,
    position: "absolute"
  },
  inFuze: {
    top: 227,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 54
  },
  welcome3: {
    top: 89,
    left: 73,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 47
  },
  to2: {
    top: 155,
    left: 147,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 57
  },
  button: {
    top: 712,
    left: 56,
    width: 257,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(244,187,187,1)",
    borderWidth: 7,
    borderColor: "#000000",
    borderStyle: "solid",
    borderRadius: 15,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.37,
    shadowRadius: 0,
    overflow: "visible"
  },
  letsBegin: {
    top: 726,
    left: 130,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24
  },
  image4: {
    top: 13,
    left: 0,
    width: 80,
    height: 123,
    position: "absolute"
  }
});

export default Welcome;
