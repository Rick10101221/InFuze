import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image, Text } from "react-native";
import Bubble from "../components/Bubble";
import MaterialButtonTransparentHamburger from "../components/MaterialButtonTransparentHamburger";
import MaterialButtonLight from "../components/MaterialButtonLight";
import { withAuthenticator } from "aws-amplify-react-native";
import { API, graphqlOperation } from "aws-amplify";
import { createDrink } from "../graphql/mutations";

function Infuze(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.group}>
        <View style={styles.bubbleStack}>
          <Bubble style={styles.bubble}></Bubble>
          <Image
            source={require("../assets/images/drink1.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
      </View>
      <View style={styles.welcomeToInfuzeStack}>
        <Text style={styles.welcomeToInfuze}></Text>
        <View style={styles.group3}>
          <View style={styles.imageRow}>
            <Image
              source={require("../assets/images/logo.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <MaterialButtonTransparentHamburger
              style={styles.materialButtonTransparentHamburger}
            ></MaterialButtonTransparentHamburger>
          </View>
          <Text style={styles.getIngredients}>Get Ingredients!</Text>
          <MaterialButtonLight
            style={styles.materialButtonLight}
          ></MaterialButtonLight>
        </View>
      </View>
      <View style={styles.group2}>
        <View style={styles.ingredientInfoRow}>
          <View style={styles.ingredientInfo}></View>
          <View style={styles.ingredientPhoto}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(211,197,213,1)"
  },
  group: {
    width: 381,
    height: 311,
    marginTop: 473,
    marginLeft: 27
  },
  bubble: {
    position: "absolute",
    top: 56,
    left: 0,
    height: 89,
    width: 174
  },
  image2: {
    top: 0,
    left: 70,
    width: 311,
    height: 311,
    position: "absolute"
  },
  bubbleStack: {
    width: 381,
    height: 311
  },
  welcomeToInfuze: {
    top: 146,
    position: "absolute",
    color: "#121212",
    fontSize: 62,
    textAlign: "center",
    left: 180
  },
  group3: {
    top: 0,
    left: 0,
    width: 353,
    height: 200,
    position: "absolute"
  },
  image: {
    width: 66,
    height: 66
  },
  materialButtonTransparentHamburger: {
    height: 36,
    width: 36,
    marginLeft: 251,
    marginTop: 15
  },
  imageRow: {
    height: 66,
    flexDirection: "row"
  },
  getIngredients: {
    color: "#121212",
    fontSize: 37,
    marginTop: 15,
    marginLeft: 51
  },
  materialButtonLight: {
    height: 36,
    width: 100,
    marginTop: 40,
    marginLeft: 118
  },
  welcomeToInfuzeStack: {
    width: 353,
    height: 200,
    marginTop: -760
  },
  group2: {
    width: 308,
    height: 177,
    flexDirection: "row",
    marginTop: 61,
    marginLeft: 27
  },
  ingredientInfo: {
    width: 141,
    height: 177,
    backgroundColor: "#E6E6E6"
  },
  ingredientPhoto: {
    width: 134,
    height: 177,
    backgroundColor: "#E6E6E6",
    marginLeft: 33
  },
  ingredientInfoRow: {
    height: 177,
    flexDirection: "row",
    flex: 1
  }
});

export default Infuze;
