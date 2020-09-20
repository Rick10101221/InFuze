import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";

function Page3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image1Stack}>
        <ImageBackground
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <TouchableOpacity style={styles.button4}>
            <Text style={styles.randomize1}>Randomize</Text>
          </TouchableOpacity>
        </ImageBackground>
        <Text style={styles.daiquiri1}></Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Page3")}
          style={styles.button1}
        ></TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.icePlease}>Ice Please!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.absolutelyNoIce}>Absolutely no Ice!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.image3Row}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <Text style={styles.iceAnyone}>Ice Anyone?</Text>
        <Image
          source={require("../assets/images/silly_hacks_logo.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
      <Text style={styles.loremIpsum1}>Lets choose some drinks for you</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,213,213,1)"
  },
  image1: {
    width: 668,
    height: 565,
    position: "absolute",
    left: 0,
    top: 0
  },
  image1_imageStyle: {
    opacity: 0.06
  },
  button4: {
    width: 246,
    height: 67,
    backgroundColor: "rgba(255,182,182,1)",
    marginTop: 10,
    marginLeft: 190
  },
  randomize1: {
    color: "#121212",
    fontSize: 24,
    marginTop: 22,
    marginLeft: 28
  },
  daiquiri1: {
    top: 441,
    left: 190,
    position: "absolute",
    color: "#121212",
    fontSize: 46
  },
  button1: {
    top: 538,
    left: 368,
    width: 122,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(249,179,179,1)"
  },
  button2: {
    top: 201,
    left: 191,
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
  icePlease: {
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 27
  },
  button3: {
    top: 344,
    left: 191,
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
  absolutelyNoIce: {
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 23
  },
  image1Stack: {
    width: 668,
    height: 594,
    marginTop: 247,
    marginLeft: -106
  },
  image3: {
    width: 80,
    height: 123
  },
  iceAnyone: {
    color: "#121212",
    fontSize: 24,
    marginLeft: 5,
    marginTop: 106
  },
  image2: {
    width: 62,
    height: 77,
    marginLeft: 67,
    marginTop: 33
  },
  image3Row: {
    height: 140,
    flexDirection: "row",
    marginTop: -828,
    marginRight: 60
  },
  loremIpsum1: {
    color: "#121212",
    fontSize: 16,
    marginTop: 31,
    marginLeft: 22
  }
});

export default Page3;
