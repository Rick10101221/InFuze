import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function Page3(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/silly_hacks_logo.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
      <Text style={styles.theFinalDrink}>The Final Drink:</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Page3")}
        style={styles.button1}
      ></TouchableOpacity>
      <Text style={styles.finish}>Finish</Text>
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        style={styles.image3}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(254,212,212,1)"
  },
  image1: {
    top: 46,
    left: 292,
    width: 62,
    height: 77,
    position: "absolute"
  },
  image2: {
    top: 13,
    left: 0,
    width: 80,
    height: 123,
    position: "absolute"
  },
  theFinalDrink: {
    top: 123,
    left: 77,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  button1: {
    top: 694,
    left: 201,
    width: 122,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(249,179,179,1)"
  },
  finish: {
    top: 709,
    left: 237,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18
  },
  image3: {
    top: 158,
    left: -130,
    width: 668,
    height: 565,
    position: "absolute",
    opacity: 0.06
  }
});

export default Page3;
