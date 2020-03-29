import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function InputDefault(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.email}>
        <View style={styles.rectangle1}>
          <View style={styles.group1}>
            <Text style={styles.email2}>Email</Text>
          </View>
        </View>
      </View>
      <Svg viewBox="0 0 0.00 0.00" style={styles.ellipse}>
        <Ellipse
          strokeWidth={1}
          fill="rgba(230, 230, 230,1)"
          stroke="rgba(230, 230, 230,1)"
          cx={0}
          cy={0}
          rx={0}
          ry={0}
        ></Ellipse>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  email: {
    width: 208,
    height: 40,
    opacity: 1,
    alignSelf: "center"
  },
  rectangle1: {
    width: 208,
    height: 40,
    backgroundColor: "transparent",
    borderRadius: 4,
    borderColor: "rgba(242,242,242,1)",
    borderWidth: 1
  },
  group1: {
    width: 129,
    height: 16,
    opacity: 1,
    marginTop: 12,
    marginLeft: 12
  },
  email2: {
    width: 208,
    height: 20,
    color: "#121212",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  ellipse: {
    width: 0,
    height: 0,
    marginTop: 151,
    marginLeft: 311
  }
});

export default InputDefault;
