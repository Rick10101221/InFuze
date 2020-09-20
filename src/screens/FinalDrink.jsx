import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { createCocktail } from "../graphql/mutations";

function FinalDrink(props) {
  const [formState, setFormState] = useState(initialState);
  const [cocktails, setCocktails] = useState([]);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function addCocktail() {
    try {
      const cocktail = { 
          name: "Silly Cocktail!",
          description: "The silliest cocktail ever! Contains the most mysterious kinds of beverages"
       };
      setCocktails([...cocktails, cocktail]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createCocktail, { input: cocktail }));
    } catch (err) {
      console.log("error creating drink:", err);
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.image2StackRow}>
        <View style={styles.image2Stack}>
          <Image
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Text style={styles.theFinalDrink}>The Final Drink:</Text>
        </View>
        <Image
          source={require("../assets/images/silly_hacks_logo.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </View>
      <View style={styles.button2Row}>
        <TouchableOpacity
          onPress={addCocktail}
          style={styles.button2}
        >
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ThankyouScreen")}
          style={styles.button1}
        >
          <Text style={styles.finish}>Finish</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.image3Stack}>
        <ImageBackground
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image3}
          imageStyle={styles.image3_imageStyle}
        >
          <Image
            source={require("../assets/images/drink.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </ImageBackground>
        <View style={styles.rect}></View>
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
    top: 0,
    left: 0,
    width: 80,
    height: 123,
    position: "absolute"
  },
  theFinalDrink: {
    top: 110,
    left: 77,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 24
  },
  image2Stack: {
    width: 256,
    height: 144
  },
  image1: {
    width: 62,
    height: 77,
    marginLeft: 36,
    marginTop: 33
  },
  image2StackRow: {
    height: 144,
    flexDirection: "row",
    marginTop: 13,
    marginRight: 21
  },
  button2: {
    width: 122,
    height: 56,
    backgroundColor: "rgba(249,179,179,1)"
  },
  submit: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 15,
    marginLeft: 36
  },
  button1: {
    width: 122,
    height: 56,
    backgroundColor: "rgba(249,179,179,1)",
    marginLeft: 57
  },
  finish: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 15,
    marginLeft: 36
  },
  button2Row: {
    height: 56,
    flexDirection: "row",
    marginTop: 566,
    marginLeft: 40,
    marginRight: 34
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
  image4: {
    height: 386,
    width: 410,
    marginTop: 56,
    marginLeft: 98
  },
  rect: {
    top: 41,
    width: 337,
    height: 471,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    left: 134
  },
  image3Stack: {
    width: 668,
    height: 565,
    marginTop: -622,
    marginLeft: -115
  }
});

export default FinalDrink;
