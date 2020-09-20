import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";

function Gallery(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image1Stack}>
        <ImageBackground
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Page3")}
            style={styles.button1}
          >
            <Text style={styles.home}>Home</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.rect}>
          <View style={styles.rect8StackRow}>
            <View style={styles.rect8Stack}>
              <View style={styles.rect8}></View>
              <Image
                source={require("../assets/images/drink.png")}
                resizeMode="contain"
                style={styles.image4}
              ></Image>
            </View>
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
            Gallery of Infuze Creations:
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
    top: 96,
    left: 0,
    width: 668,
    height: 565,
    position: "absolute"
  },
  image1_imageStyle: {
    opacity: 0.06
  },
  button1: {
    width: 284,
    height: 56,
    backgroundColor: "rgba(249,179,179,1)",
    marginTop: 464,
    marginLeft: 188
  },
  home: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 30,
    marginTop: 10,
    marginLeft: 86
  },
  rect: {
    top: 0,
    width: 414,
    height: 554,
    position: "absolute",
    backgroundColor: "rgba(245,191,191,1)",
    left: 108
  },
  rect8: {
    top: 2,
    left: 0,
    width: 143,
    height: 144,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  image4: {
    position: "absolute",
    top: 0,
    left: 3,
    height: 148,
    width: 136
  },
  rect8Stack: {
    width: 143,
    height: 148
  },
  rect9: {
    width: 143,
    height: 144,
    backgroundColor: "#E6E6E6",
    marginLeft: 40,
    marginTop: 2
  },
  rect8StackRow: {
    height: 148,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 50,
    marginRight: 38
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
    marginLeft: 40
  },
  rect2Row: {
    height: 144,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 50,
    marginRight: 38
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
    marginLeft: 40
  },
  rect4Row: {
    height: 144,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 50,
    marginRight: 38
  },
  image1Stack: {
    width: 668,
    height: 661,
    marginTop: 171,
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
    width: 346,
    height: 145,
    position: "absolute"
  },
  image2Stack: {
    width: 354,
    height: 145,
    marginTop: -819
  }
});

export default Gallery;
