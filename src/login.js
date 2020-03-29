import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import InputDefault from "./components/InputDefault";
import ButtonDefaultStateFocus from "./components/ButtonDefaultStateFocus";
import ButtonDefaultPrimary from "./components/ButtonDefaultPrimary";

function Index(props) {
    return (
        <View style={styles.container}>
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
    container: {
        width: 534,
        height: 768
    },
    rectangle3: {
        backgroundColor: "rgba(255,255,255,1)",
        flex: 1
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
        marginLeft: 128
    },
    buttonDefaultStateFocus1: {
        width: 277,
        height: 52,
        backgroundColor: "transparent",
        opacity: 1,
        marginTop: 11,
        marginLeft: 128
    },
    buttonDefaultPrimary: {
        width: 179,
        height: 47,
        backgroundColor: "transparent",
        opacity: 1,
        marginTop: 16,
        marginLeft: 177
    },
    loremIpsum: {
        width: 170,
        height: 50,
        color: "#121212",
        fontSize: 14,
        fontFamily: "roboto-regular",
        marginTop: 38,
        marginLeft: 182
    }
});

export default login;