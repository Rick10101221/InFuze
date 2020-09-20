import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";

function ThankyouScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image2Row}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Image
          source={require("../assets/images/silly_hacks_logo.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </View>
      <View style={styles.thanksForUsingStack}>
        <Text style={styles.thanksForUsing}>Thanks For Using</Text>
        <ImageBackground
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image3}
          imageStyle={styles.image3_imageStyle}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Page3")}
            style={styles.button1}
          >
            <Text style={styles.infuseAgain1}>Infuse AGAIN!</Text>
          </TouchableOpacity>
        </ImageBackground>
        <Text style={styles.inFuze}>In-Fuze</Text>
        <Text style={styles.loremIpsum}></Text>
      </View>
      <View style={styles.infuseAgain2Stack}>
        <Text style={styles.infuseAgain2}>Infuse AGAIN!</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Page3")}
          style={styles.button2}
        >
          <View style={styles.loremIpsum1Row}>
            <Text style={styles.loremIpsum1}></Text>
            <Text style={styles.viewGallery}>View Gallery</Text>
          </View>
        </TouchableOpacity>
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
    width: 80,
    height: 123
  },
  image1: {
    width: 62,
    height: 77,
    marginLeft: 212,
    marginTop: 33
  },
  image2Row: {
    height: 123,
    flexDirection: "row",
    marginTop: 13,
    marginRight: 60
  },
  thanksForUsing: {
    top: 0,
    position: "absolute",
    color: "#121212",
    fontSize: 43,
    opacity: 0.74,
    left: 160
  },
  image3: {
    top: 30,
    left: 0,
    width: 668,
    height: 565,
    position: "absolute"
  },
  image3_imageStyle: {
    opacity: 0.06
  },
  button1: {
    width: 284,
    height: 56,
    backgroundColor: "rgba(249,179,179,1)",
    marginTop: 467,
    marginLeft: 197
  },
  infuseAgain1: {
    color: "#121212",
    fontSize: 30,
    marginTop: 11,
    marginLeft: 49
  },
  inFuze: {
    top: 263,
    left: 183,
    position: "absolute",
    color: "#121212",
    fontSize: 72,
    opacity: 0.63
  },
  loremIpsum: {
    top: 526,
    left: 249,
    position: "absolute",
    color: "#121212"
  },
  thanksForUsingStack: {
    width: 668,
    height: 595,
    marginTop: 31,
    marginLeft: -127
  },
  infuseAgain2: {
    top: 10,
    left: 49,
    position: "absolute",
    color: "#121212",
    fontSize: 30
  },
  button2: {
    top: 0,
    left: 0,
    width: 284,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(249,179,179,1)",
    flexDirection: "row"
  },
  loremIpsum1: {
    color: "#121212",
    marginTop: 18
  },
  viewGallery: {
    color: "#121212",
    fontSize: 30,
    marginLeft: 13
  },
  loremIpsum1Row: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 55,
    marginLeft: 52,
    marginTop: 10
  },
  infuseAgain2Stack: {
    width: 284,
    height: 56,
    marginTop: 1,
    marginLeft: 70
  }
});

export default ThankyouScreen;
