import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ButtonDefaultStateFocus(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.email1Stack}>
        <View style={styles.email1}>
          <View style={styles.rectangle3}></View>
        </View>
        <Text style={styles.password}>{props.text1 || "Password"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  email1: {
    top: 0,
    left: 0,
    width: 208,
    height: 40,
    position: "absolute",
    opacity: 1
  },
  rectangle3: {
    width: 208,
    height: 40,
    backgroundColor: "transparent",
    opacity: 1,
    borderRadius: 4,
    borderColor: "rgba(45,183,255,1)",
    borderWidth: 1
  },
  password: {
    top: 10,
    left: 12,
    width: 208,
    height: 20,
    color: "#121212",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  email1Stack: {
    width: 220,
    height: 40
  }
});

export default ButtonDefaultStateFocus;
