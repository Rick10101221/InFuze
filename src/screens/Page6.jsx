import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";

function Page6(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image2Row}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Text style={styles.alcohol}>Alcohol:</Text>
        <Image
          source={require("../assets/images/silly_hacks_logo.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </View>
      <View style={styles.buttonStackStack}>
        <View style={styles.buttonStack}>
          <TouchableOpacity style={styles.button}
          onPress={() => props.navigation.navigate("FinalDrink")}>
            <Text style={styles.randomize}>Randomize</Text>
          </TouchableOpacity>
          <ImageBackground
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.image3}
            imageStyle={styles.image3_imageStyle}
          >
            <TouchableOpacity style={styles.button5}>
              <Text style={styles.daiquiri}>Daiquiri</Text>
            </TouchableOpacity>
          </ImageBackground>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.vodka}>Vodka</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button3}>
            <Text style={styles.tequila}>Tequila</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button4}>
            <Text style={styles.noAlcohol}>No Alcohol</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.loremIpsum}>Lets choose some drinks for you</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Page3")}
          style={styles.button1}
        >
          <Text style={styles.next1}>Next</Text>
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
  alcohol: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24,
    marginLeft: 62,
    marginTop: 110
  },
  image1: {
    width: 62,
    height: 77,
    marginLeft: 60,
    marginTop: 33
  },
  image2Row: {
    height: 144,
    flexDirection: "row",
    marginTop: 13,
    marginRight: 21
  },
  button: {
    top: 76,
    width: 246,
    height: 67,
    position: "absolute",
    backgroundColor: "rgba(255,182,182,1)",
    left: 210
  },
  randomize: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 15,
    marginLeft: 45
  },
  image3: {
    top: 0,
    width: 668,
    height: 565,
    position: "absolute",
    left: 0
  },
  image3_imageStyle: {
    opacity: 0.06
  },
  button5: {
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
    marginTop: 461,
    marginLeft: 212
  },
  daiquiri: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 41
  },
  button2: {
    top: 174,
    left: 212,
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
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 41
  },
  button3: {
    top: 261,
    left: 212,
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
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 17,
    marginLeft: 43
  },
  button4: {
    top: 356,
    left: 210,
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
  noAlcohol: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 22,
    marginLeft: 39
  },
  buttonStack: {
    top: 0,
    left: 0,
    width: 668,
    height: 565,
    position: "absolute"
  },
  loremIpsum: {
    top: 27,
    left: 156,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16
  },
  button1: {
    top: 547,
    left: 364,
    width: 122,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(249,179,179,1)"
  },
  next1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 16,
    marginLeft: 39
  },
  buttonStackStack: {
    width: 668,
    height: 603,
    marginLeft: -134
  }
});

export default Page6;
