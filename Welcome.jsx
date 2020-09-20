import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";

function Welcome(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/drink1.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.to3}>To</Text>
        </ImageBackground>
        <ImageBackground
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          <Image
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </ImageBackground>
        <Text style={styles.inFuze}>In-Fuze</Text>
        <Text style={styles.welcome3}>Welcome</Text>
        <Text style={styles.to2}>To</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Page1")}
          style={styles.button}
        >
          <Text style={styles.letsBegin}>Lets Begin</Text>
        </TouchableOpacity>
      </View>
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
    top: 0,
    left: 0,
    width: 997,
    height: 1050,
    position: "absolute",
    backgroundColor: "#fff"
  },
  image_imageStyle: {
    opacity: 0.42
  },
  to3: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 57,
    marginTop: 175,
    marginLeft: 546
  },
  image2: {
    top: 33,
    left: 399,
    width: 80,
    height: 123,
    position: "absolute"
  },
  image2_imageStyle: {},
  image4: {
    width: 80,
    height: 123
  },
  inFuze: {
    top: 247,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 54,
    left: 506
  },
  welcome3: {
    top: 110,
    left: 499,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 47
  },
  to2: {
    top: 175,
    left: 546,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 57
  },
  button: {
    top: 809,
    left: 477,
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
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 52
  },
  imageStack: {
    width: 997,
    height: 1050,
    marginTop: -20,
    marginLeft: -399
  }
});

export default Welcome;
