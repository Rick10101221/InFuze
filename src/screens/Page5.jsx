import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";

function Page5(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image1Stack}>
        <ImageBackground
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <TouchableOpacity style={styles.button6}
          onPress={() => props.navigation.navigate("Page6")}>
            <Text style={styles.randomize1}>Randomize</Text>
          </TouchableOpacity>
        </ImageBackground>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.spicyNutellaYogurt}>Spicy Nutella Yogurt</Text>
          <Text style={styles.daiquiri1}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.blackSesameYogurt}>Black Sesame Yogurt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.greekYogurt}>Greek Yogurt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4}>
          <Text style={styles.blueberryYogurt}>Blueberry Yogurt</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Page3")}
          style={styles.button5}
        >
          <Text style={styles.next1}>Next</Text>
        </TouchableOpacity>
        <Text style={styles.loremIpsum1}>Lets choose some drinks for you</Text>
      </View>
      <View style={styles.image2Row}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Text style={styles.typeOfYogurt}>Type of Yogurt:</Text>
        <Image
          source={require("../assets/images/silly_hacks_logo.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,211,211,1)"
  },
  image1: {
    top: 0,
    left: 0,
    width: 668,
    height: 565,
    position: "absolute"
  },
  image1_imageStyle: {
    opacity: 0.06
  },
  button6: {
    width: 246,
    height: 67,
    backgroundColor: "rgba(255,182,182,1)",
    marginTop: 87,
    marginLeft: 212
  },
  randomize1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 13,
    marginLeft: 66
  },
  button1: {
    top: 468,
    left: 205,
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
  spicyNutellaYogurt: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 21
  },
  daiquiri1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 46,
    marginTop: 2,
    marginLeft: 27
  },
  button2: {
    top: 363,
    left: 205,
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
  blackSesameYogurt: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 21
  },
  button3: {
    top: 269,
    left: 205,
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
  greekYogurt: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 30
  },
  button4: {
    top: 183,
    left: 205,
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
  blueberryYogurt: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 21
  },
  button5: {
    top: 548,
    left: 383,
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
    marginLeft: 36
  },
  loremIpsum1: {
    top: 9,
    left: 170,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16
  },
  image1Stack: {
    width: 668,
    height: 604,
    marginTop: 175,
    marginLeft: -148
  },
  image2: {
    width: 80,
    height: 123
  },
  typeOfYogurt: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24,
    marginLeft: 6,
    marginTop: 110
  },
  image3: {
    width: 62,
    height: 77,
    marginLeft: 29,
    marginTop: 33
  },
  image2Row: {
    height: 144,
    flexDirection: "row",
    marginTop: -766,
    marginRight: 21
  }
});

export default Page5;
