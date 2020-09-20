import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";

function ThankyouScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image1Stack}>
        <Image
          source={require("../assets/images/silly_hacks_logo.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <View style={styles.image2Stack}>
          <Image
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <ImageBackground
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.image3}
            imageStyle={styles.image3_imageStyle}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Welcome")}
              style={styles.button1}
            >
              <Text style={styles.infuseAgain1}>Infuse AGAIN!</Text>
            </TouchableOpacity>
          </ImageBackground>
          <Text style={styles.inFuze}>In-Fuze</Text>
          <Text style={styles.loremIpsum}></Text>
        </View>
        <Text style={styles.thanksForUsing}>Thanks For Using</Text>
      </View>
      <View style={styles.infuseAgain2Stack}>
        <Text style={styles.infuseAgain2}>Infuse AGAIN!</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Gallery")}
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
  image1: {
    top: 33,
    left: 439,
    width: 62,
    height: 77,
    position: "absolute"
  },
  image2: {
    top: 0,
    left: 147,
    width: 80,
    height: 123,
    position: "absolute"
  },
  image3: {
    top: 110,
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
    marginTop: 488,
    marginLeft: 204
  },
  infuseAgain1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 30,
    marginTop: 10,
    marginLeft: 49
  },
  inFuze: {
    top: 335,
    left: 221,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 72,
    opacity: 0.63
  },
  loremIpsum: {
    top: 618,
    left: 255,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  image2Stack: {
    top: 0,
    left: 0,
    width: 668,
    height: 675,
    position: "absolute"
  },
  thanksForUsing: {
    top: 154,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 43,
    opacity: 0.74,
    left: 161
  },
  image1Stack: {
    width: 668,
    height: 675,
    marginTop: 13,
    marginLeft: -147
  },
  infuseAgain2: {
    top: 10,
    left: 49,
    position: "absolute",
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 18
  },
  viewGallery: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 30,
    marginLeft: 31
  },
  loremIpsum1Row: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 38,
    marginLeft: 51,
    marginTop: 10
  },
  infuseAgain2Stack: {
    width: 284,
    height: 56,
    marginTop: 13,
    marginLeft: 57
  }
});

export default ThankyouScreen;
