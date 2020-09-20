import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground
} from "react-native";

function Page6(props) {
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
          <View style={styles.buttonStackStack}>
            <View style={styles.buttonStack}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.randomize}>Randomize</Text>
              </TouchableOpacity>
              <ImageBackground
                source={require("../assets/images/logo.png")}
                resizeMode="contain"
                style={styles.image3}
                imageStyle={styles.image3_imageStyle}
              >
                <TouchableOpacity style={styles.button4}>
                  <Text style={styles.noAlcohol}>No Alcohol</Text>
                </TouchableOpacity>
              </ImageBackground>
              <TouchableOpacity style={styles.button2}>
                <Text style={styles.vodka}>Vodka</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button3}>
                <Text style={styles.tequila}>Tequila</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button5}>
                <Text style={styles.daiquiri}>Daiquiri</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.loremIpsum}>
              Lets choose some drinks for you
            </Text>
            <Text style={styles.alcohol}>Alcohol:</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Page3")}
        style={styles.button1}
      >
        <Text style={styles.next1}>Next</Text>
      </TouchableOpacity>
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
    left: 464,
    width: 62,
    height: 77,
    position: "absolute"
  },
  image2: {
    top: 0,
    left: 172,
    width: 80,
    height: 123,
    position: "absolute"
  },
  button: {
    top: 111,
    width: 246,
    height: 67,
    position: "absolute",
    backgroundColor: "rgba(255,182,182,1)",
    left: 256
  },
  randomize: {
    color: "#121212",
    fontSize: 24,
    marginTop: 15,
    marginLeft: 45
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
  button4: {
    width: 257,
    height: 56,
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
    overflow: "visible",
    marginTop: 446,
    marginLeft: 249
  },
  noAlcohol: {
    color: "#121212",
    fontSize: 24,
    marginTop: 13,
    marginLeft: 44
  },
  button2: {
    top: 264,
    left: 251,
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
  vodka: {
    color: "#121212",
    fontSize: 24,
    marginTop: 15,
    marginLeft: 42
  },
  button3: {
    top: 351,
    left: 251,
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
  tequila: {
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 42
  },
  button5: {
    top: 551,
    left: 251,
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
  daiquiri: {
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 42
  },
  buttonStack: {
    top: 18,
    left: 0,
    width: 668,
    height: 607,
    position: "absolute"
  },
  loremIpsum: {
    top: 61,
    left: 194,
    position: "absolute",
    color: "#121212",
    fontSize: 16
  },
  alcohol: {
    top: 0,
    left: 314,
    position: "absolute",
    color: "#121212",
    fontSize: 24
  },
  buttonStackStack: {
    top: 110,
    left: 0,
    width: 668,
    height: 625,
    position: "absolute"
  },
  image2Stack: {
    top: 0,
    left: 0,
    width: 668,
    height: 735,
    position: "absolute"
  },
  image1Stack: {
    width: 668,
    height: 735,
    marginTop: 13,
    marginLeft: -172
  },
  button1: {
    width: 122,
    height: 56,
    backgroundColor: "rgba(249,179,179,1)",
    marginTop: 30,
    marginLeft: 231
  },
  next1: {
    color: "#121212",
    fontSize: 18,
    marginTop: 16,
    marginLeft: 39
  }
});

export default Page6;
