import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

function Gallery(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image1Stack}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <View style={styles.rect}>
          <View style={styles.rect8Row}>
            <View style={styles.rect8}></View>
            <View style={styles.rect9}></View>
          </View>
          <View style={styles.rect2Row}>
            <View style={styles.rect2}></View>
            <View style={styles.rect3}></View>
          </View>
          <View style={styles.rect4Row}>
            <View style={styles.rect4}></View>
            <View style={styles.rect5}></View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Page3")}
          style={styles.button1}
        >
          <Text style={styles.home}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.image2Stack}>
        <Image
          source={require("../assets/images/silly_hacks_logo.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <View style={styles.image3Stack}>
          <Image
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <Text style={styles.theFinalDrink1}>
            Gallery of Infuse Creations:
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(253,205,205,1)"
  },
  image1: {
    top: 90,
    left: 0,
    width: 668,
    height: 565,
    position: "absolute",
    opacity: 0.06
  },
  rect: {
    top: 0,
    width: 414,
    height: 554,
    position: "absolute",
    backgroundColor: "rgba(245,191,191,1)",
    left: 127
  },
  rect8: {
    width: 143,
    height: 144,
    backgroundColor: "#E6E6E6"
  },
  rect9: {
    width: 143,
    height: 144,
    backgroundColor: "#E6E6E6",
    marginLeft: 78
  },
  rect8Row: {
    height: 144,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 31,
    marginRight: 19
  },
  rect2: {
    width: 143,
    height: 144,
    backgroundColor: "#E6E6E6"
  },
  rect3: {
    width: 143,
    height: 144,
    backgroundColor: "#E6E6E6",
    marginLeft: 78
  },
  rect2Row: {
    height: 144,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 31,
    marginRight: 19
  },
  rect4: {
    width: 143,
    height: 144,
    backgroundColor: "#E6E6E6"
  },
  rect5: {
    width: 143,
    height: 144,
    backgroundColor: "#E6E6E6",
    marginLeft: 78
  },
  rect4Row: {
    height: 144,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 31,
    marginRight: 19
  },
  button1: {
    top: 600,
    left: 207,
    width: 284,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(249,179,179,1)"
  },
  home: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 30,
    marginTop: 10,
    marginLeft: 94
  },
  image1Stack: {
    width: 668,
    height: 656,
    marginTop: 177,
    marginLeft: -127
  },
  image2: {
    top: 33,
    left: 292,
    width: 62,
    height: 77,
    position: "absolute"
  },
  image3: {
    top: 0,
    left: 0,
    width: 80,
    height: 123,
    position: "absolute"
  },
  theFinalDrink1: {
    top: 111,
    left: 31,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  image3Stack: {
    top: 0,
    left: 0,
    width: 345,
    height: 145,
    position: "absolute"
  },
  image2Stack: {
    width: 354,
    height: 145,
    marginTop: -820
  }
});

export default Gallery;
