import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Bubble(props) {
  return (
    <View style={[styles.container, props.style]}>
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
        <View style={styles.rect}></View>
        <Text style={styles.clickHereToBegin}>
          Press the button to {"\n"}get a random ingredient!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  ellipse: {
    top: 0,
    left: 0,
    width: 174,
    height: 89,
    position: "absolute"
  },
  rect: {
    top: 44,
    left: 139,
    width: 25,
    height: 35,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  clickHereToBegin: {
    top: 28,
    left: 12,
    position: "absolute",
    color: "#121212",
    textAlign: "center"
  },
  ellipseStack: {
    width: 174,
    height: 89
  }
});

export default Bubble;
