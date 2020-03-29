import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ButtonDefaultPrimary(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.loginFacebook}>
        <View style={styles.rectangle}>
          <View style={styles.group}>
            <Text style={styles.masuk}>Login</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  loginFacebook: {
    opacity: 1,
    flex: 1
  },
  rectangle: {
    width: 208,
    height: 40,
    backgroundColor: "rgba(45,183,255,1)",
    borderRadius: 4
  },
  group: {
    width: 184,
    height: 16,
    opacity: 1,
    marginTop: 12,
    marginLeft: 12
  },
  masuk: {
    width: 184,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(249,250,252,1)",
    opacity: 1,
    fontSize: 14,
    fontFamily: "roboto-500",
    letterSpacing: 0.6,
    textAlign: "center"
  }
});

export default ButtonDefaultPrimary;
