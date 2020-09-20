import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialButtonLight from "../components/MaterialButtonLight";

function Welcome(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.group}>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 173.62 88.98" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(230, 230, 230,1)"
              cx={87}
              cy={44}
              rx={87}
              ry={44}
            ></Ellipse>
          </Svg>
          <ImageBackground
            source={require("../assets/images/drink1.png")}
            resizeMode="contain"
            style={styles.image2}
            imageStyle={styles.image2_imageStyle}
          >
            <View style={styles.rect}></View>
          </ImageBackground>
          <MaterialButtonLight
            funcionalidad={() => props.navigation.navigate("Infuzer")}
            style={styles.materialButtonLight}
          ></MaterialButtonLight>
          <Text style={styles.clickHereToBegin}>Click here to begin!</Text>
        </View>
      </View>
      <Text style={styles.welcomeToInfuze}>
        Welcome {"\n"}To {"\n"}Infuze
      </Text>
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
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
    marginLeft: 13
  },
  ellipse: {
    top: 56,
    left: 0,
    width: 174,
    height: 89,
    position: "absolute"
  },
  image2: {
    top: 0,
    left: 70,
    width: 311,
    height: 311,
    position: "absolute"
  },
  image2_imageStyle: {},
  rect: {
    width: 25,
    height: 35,
    backgroundColor: "#E6E6E6",
    marginTop: 101,
    marginLeft: 69
  },
  materialButtonLight: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 33,
    top: 164
  },
  clickHereToBegin: {
    top: 93,
    left: 33,
    position: "absolute",
    color: "#121212"
  },
  ellipseStack: {
    width: 381,
    height: 311
  },
  welcomeToInfuze: {
    color: "#121212",
    fontSize: 62,
    textAlign: "center",
    marginTop: -614,
    alignSelf: "center"
  },
  image: {
    width: 66,
    height: 66,
    marginTop: -356
  }
});

export default Welcome;
