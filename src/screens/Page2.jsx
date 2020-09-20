import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground
} from "react-native";

function Page2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button1StackStack}>
        <View style={styles.button1Stack}>
          <TouchableOpacity style={styles.button1}>
            <View style={styles.daiquiri1Row}>
              <Text style={styles.daiquiri1}></Text>
              <Text style={styles.orangeJuice}>Orange Juice</Text>
            </View>
          </TouchableOpacity>
          <ImageBackground
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.image1}
            imageStyle={styles.image1_imageStyle}
          >
            <Text style={styles.appleCiderVinegar}>Apple Cider Vinegar</Text>
          </ImageBackground>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Page3")}
            style={styles.button5}
          >
            <Text style={styles.next1}>Next</Text>
          </TouchableOpacity>
          <Text style={styles.loremIpsum1}>
            Lets choose some drinks for you
          </Text>
          <TouchableOpacity style={styles.button6}
          onPress={() => props.navigation.navigate("Page3")}>
            <Text style={styles.randomize1}>Randomize</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.coconutWater}>Coconut Water</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.kvas}>KVAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4}></TouchableOpacity>
      </View>
      <View style={styles.image2Row}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Text style={styles.additionalLiquids}>Additional Liquids:</Text>
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
    backgroundColor: "rgba(252,213,213,1)"
  },
  button1: {
    top: 459,
    left: 189,
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
    overflow: "visible",
    flexDirection: "row"
  },
  daiquiri1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 46
  },
  orangeJuice: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginLeft: 38
  },
  daiquiri1Row: {
    height: 29,
    flexDirection: "row",
    flex: 1,
    marginRight: 75,
    marginLeft: 4,
    marginTop: 13
  },
  image1: {
    top: 0,
    width: 668,
    height: 565,
    position: "absolute",
    left: 0
  },
  image1_imageStyle: {
    opacity: 0.06
  },
  appleCiderVinegar: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 189,
    marginLeft: 217
  },
  button5: {
    top: 560,
    left: 371,
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
    marginLeft: 45
  },
  loremIpsum1: {
    top: 0,
    left: 169,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16
  },
  button6: {
    top: 36,
    width: 246,
    height: 67,
    position: "absolute",
    backgroundColor: "rgba(255,182,182,1)",
    left: 193
  },
  randomize1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 15,
    marginLeft: 44
  },
  button1Stack: {
    top: 0,
    left: 0,
    width: 668,
    height: 616,
    position: "absolute"
  },
  button2: {
    top: 358,
    left: 187,
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
  coconutWater: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 42
  },
  button3: {
    top: 264,
    left: 189,
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
  kvas: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 14,
    marginLeft: 34
  },
  button4: {
    top: 176,
    left: 189,
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
  button1StackStack: {
    width: 668,
    height: 616,
    marginTop: 184,
    marginLeft: -147
  },
  image2: {
    width: 80,
    height: 123
  },
  additionalLiquids: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24,
    marginLeft: 5,
    marginTop: 110
  },
  image3: {
    width: 62,
    height: 77,
    marginTop: 33
  },
  image2Row: {
    height: 144,
    flexDirection: "row",
    marginTop: -787,
    marginRight: 21
  }
});

export default Page2;
