import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import InputDefault from "../components/InputDefault";
import ButtonDefaultStateFocus from "../components/ButtonDefaultStateFocus";
import ButtonDefaultPrimary from "../components/ButtonDefaultPrimary";

function SignUp(props) {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle3}>
        <Image
          source={require("../public/logo.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.newsDeck}>NewsDeck</Text>
        <InputDefault style={styles.inputDefault1}></InputDefault>
        <ButtonDefaultStateFocus
          text1=""
          style={styles.buttonDefaultStateFocus1}
        ></ButtonDefaultStateFocus>
        <ButtonDefaultPrimary
          style={styles.buttonDefaultPrimary}
        ></ButtonDefaultPrimary>
        <Text style={styles.loremIpsum}>Don&#39;t have an account yet?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  rectangle3: {
    width: 534,
    height: 768,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 12,
    alignSelf: "center"
  },
  image: {
    width: 113,
    height: 114,
    marginTop: 26,
    marginLeft: 210
  },
  newsDeck: {
    width: 146,
    height: 54,
    color: "#121212",
    fontSize: 30,
    fontFamily: "roboto-regular",
    marginLeft: 194
  },
  inputDefault1: {
    width: 277,
    height: 47,
    backgroundColor: "transparent",
    opacity: 1,
    marginTop: 178,
    alignSelf: "center"
  },
  buttonDefaultStateFocus1: {
    width: 277,
    height: 52,
    backgroundColor: "transparent",
    opacity: 1,
    marginTop: 11,
    alignSelf: "center"
  },
  buttonDefaultPrimary: {
    width: 179,
    height: 47,
    backgroundColor: "transparent",
    opacity: 1,
    marginTop: 17,
    alignSelf: "center"
  },
  loremIpsum: {
    width: 170,
    height: 50,
    color: "#121212",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 37,
    alignSelf: "center"
  }
});

export default SignUp;
