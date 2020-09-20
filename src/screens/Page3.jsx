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
          <TouchableOpacity style={styles.button4}
          onPress={() => props.navigation.navigate("Page4")}>
            <Text style={styles.randomize1}>Randomize</Text>
          </TouchableOpacity>
        </ImageBackground>
        <Text style={styles.daiquiri1}></Text>
        <Text style={styles.loremIpsum1}>Lets choose some drinks for you</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Page4")}
          style={styles.button1}
        >
          <Text style={styles.next1}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}
        onPress={() => props.navigation.navigate("Page4")}
        >
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
    top: 11
  },
  image1_imageStyle: {
    opacity: 0.06
  },
  button4: {
    width: 246,
    height: 67,
    backgroundColor: "rgba(255,182,182,1)",
    marginTop: 68,
    marginLeft: 179
  },
  randomize1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 23,
    marginLeft: 28
  },
  daiquiri1: {
    top: 504,
    left: 206,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 46
  },
  loremIpsum1: {
    top: 0,
    left: 144,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16
  },
  button1: {
    top: 526,
    left: 334,
    width: 122,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(249,179,179,1)"
  },
  next1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 15,
    marginLeft: 26
  },
  button2: {
    top: 198,
    left: 181,
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
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 28
  },
  button3: {
    top: 341,
    left: 181,
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
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 15,
    marginLeft: 23
  },
  image1Stack: {
    width: 668,
    height: 582,
    marginTop: 184,
    marginLeft: -122
  },
  image3: {
    width: 80,
    height: 123
  },
  iceAnyone: {
    fontFamily: "comic-sans-ms-regular",
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
    marginTop: -753,
    marginRight: 21
  }
});

export default Page3;
