import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground
} from "react-native";

const finaldrink = {name: "", description: ""}

function Page1(props) {
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
            <TouchableOpacity style={styles.button6}>
              <Text style={styles.soyMilk}>Soy Milk</Text>
            </TouchableOpacity>
          </ImageBackground>
          <TouchableOpacity style={styles.button3}>
            <Text style={styles.almondMilk}>Almond Milk</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button4}>
            <Text style={styles.coconutMilk}>Coconut Milk</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button5}>
            <Text style={styles.riceMilk}>Rice Milk</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.loremIpsum}>Lets choose some drinks for you</Text>
      </View>
      <Text style={styles.drinks}>Step 1: Pick your Liquid Base:</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Page2")}
        style={styles.button2}
      >
        <Text style={styles.next}>Next</Text>
      </TouchableOpacity>
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
  button: {
    top: 59,
    width: 246,
    height: 67,
    position: "absolute",
    backgroundColor: "rgba(255,182,182,1)",
    left: 209
  },
  randomize: {
    color: "#121212",
    fontSize: 24,
    marginTop: 12,
    marginLeft: 28
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
  button6: {
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
    marginTop: 483,
    marginLeft: 205
  },
  soyMilk: {
    color: "#121212",
    fontSize: 24,
    marginTop: 13,
    marginLeft: 42
  },
  button3: {
    top: 282,
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
  almondMilk: {
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 50
  },
  button4: {
    top: 196,
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
  coconutMilk: {
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 42
  },
  button5: {
    top: 377,
    left: 203,
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
  riceMilk: {
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 44
  },
  buttonStack: {
    top: 0,
    left: 0,
    width: 668,
    height: 565,
    position: "absolute"
  },
  loremIpsum: {
    top: 6,
    left: 147,
    position: "absolute",
    color: "#121212",
    fontSize: 16
  },
  buttonStackStack: {
    width: 668,
    height: 565,
    marginTop: 60,
    marginLeft: -125
  },
  drinks: {
    color: "#121212",
    fontSize: 24,
    marginTop: -625,
    marginLeft: 49
  },
  button2: {
    width: 122,
    height: 56,
    backgroundColor: "rgba(249,179,179,1)",
    marginTop: 604,
    marginLeft: 201
  },
  next: {
    color: "#121212",
    fontSize: 18,
    marginTop: 15,
    marginLeft: 47
  }
});

export default Page1;
