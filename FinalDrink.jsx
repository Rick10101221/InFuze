import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";

function FinalDrink(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image2StackRow}>
        <View style={styles.image2Stack}>
          <Image
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Text style={styles.theFinalDrink}>The Final Drink:</Text>
        </View>
        <Image
          source={require("../assets/images/silly_hacks_logo.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </View>
      <View style={styles.button1Stack}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Page3")}
          style={styles.button1}
        >
          <Text style={styles.finish}>Finish</Text>
        </TouchableOpacity>
        <ImageBackground
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image3}
          imageStyle={styles.image3_imageStyle}
        >
          <View style={styles.rect}></View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(254,212,212,1)"
  },
  image2: {
    top: 0,
    left: 0,
    width: 80,
    height: 123,
    position: "absolute"
  },
  theFinalDrink: {
    top: 110,
    left: 77,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  image2Stack: {
    width: 256,
    height: 144
  },
  image1: {
    width: 62,
    height: 77,
    marginLeft: 36,
    marginTop: 33
  },
  image2StackRow: {
    height: 144,
    flexDirection: "row",
    marginTop: 13,
    marginRight: 60
  },
  button1: {
    top: 525,
    left: 334,
    width: 122,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(249,179,179,1)"
  },
  finish: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 15,
    marginLeft: 36
  },
  image3: {
    top: 0,
    left: 0,
    width: 668,
    height: 565,
    position: "absolute"
  },
  image3_imageStyle: {
    opacity: 0.06
  },
  rect: {
    width: 337,
    height: 471,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 142
  },
  button1Stack: {
    width: 668,
    height: 581,
    marginTop: 81,
    marginLeft: -103
  }
});

export default FinalDrink;
