import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Center } from "@builderx/utils";

function Page4(props) {
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
      <Center horizontal>
        <Text style={styles.thanksForUsing}>Thanks For Using</Text>
      </Center>
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        style={styles.image3}
      ></Image>
      <Text style={styles.inFuze}>In-Fuze</Text>
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
  thanksForUsing: {
    top: 167,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 43,
    opacity: 0.74,
    left: 14
  },
  image3: {
    top: 158,
    left: -130,
    width: 668,
    height: 565,
    position: "absolute",
    opacity: 0.06
  },
  inFuze: {
    top: 356,
    left: 55,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 72,
    opacity: 0.63
  }
});

export default Page4;
