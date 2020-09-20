import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";

function Page4(props) {
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
          onPress={() => props.navigation.navigate("Page5")}>
            <Text style={styles.randomize1}>Randomize</Text>
          </TouchableOpacity>
        </ImageBackground>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.daiquiri1}></Text>
          <Text style={styles.dragonFruit}>Dragon Fruit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}
        onPress={() => props.navigation.navigate("Page5")}>
          <Text style={styles.snakeSkinFruit}>SnakeSkin Fruit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.lime}>Lime</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4}>
          <Text style={styles.strawberries}>Strawberries</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Page3")}
          style={styles.button5}
        >
          <Text style={styles.next1}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.image2Row}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Text style={styles.typeOfFruit}>Type of Fruit:</Text>
        <Image
          source={require("../assets/images/silly_hacks_logo.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
      </View>
      <Text style={styles.loremIpsum1}>Lets choose some drinks for you</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,211,211,1)"
  },
  image1: {
    width: 668,
    height: 565,
    position: "absolute",
    top: 0,
    left: 0
  },
  image1_imageStyle: {
    opacity: 0.06
  },
  button6: {
    width: 246,
    height: 67,
    backgroundColor: "rgba(255,182,182,1)",
    marginTop: 37,
    marginLeft: 214
  },
  randomize1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 13,
    marginLeft: 45
  },
  button1: {
    top: 421,
    left: 217,
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
  daiquiri1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 46,
    marginTop: 56,
    marginLeft: 18
  },
  dragonFruit: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: -42,
    marginLeft: 37
  },
  button2: {
    top: 316,
    left: 217,
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
  snakeSkinFruit: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 15,
    marginLeft: 29
  },
  button3: {
    top: 217,
    left: 217,
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
  lime: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 13,
    marginLeft: 24
  },
  button4: {
    top: 124,
    left: 214,
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
  strawberries: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 27
  },
  button5: {
    top: 510,
    left: 372,
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
    marginLeft: 30
  },
  image1Stack: {
    width: 668,
    height: 566,
    marginTop: 211,
    marginLeft: -151
  },
  image2: {
    width: 80,
    height: 123
  },
  typeOfFruit: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24,
    marginLeft: 5,
    marginTop: 94
  },
  image3: {
    width: 62,
    height: 77,
    marginLeft: 49,
    marginTop: 33
  },
  image2Row: {
    height: 128,
    flexDirection: "row",
    marginTop: -764,
    marginRight: 21
  },
  loremIpsum1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 43,
    marginLeft: 22
  }
});

export default Page4;
