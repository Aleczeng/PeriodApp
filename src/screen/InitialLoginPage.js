import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LinearGradient} from "expo";

export class InitialLoginPage extends Component {
    render() {
        return (
            <LinearGradient colors={["#EF4DB6", "#C643FC"]} style={styles.container}>
                {this.props.fontLoaded && <Text style={styles.text}>
                    InitialLoginPage
                </Text>}
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontFamily: "LobsterRegular",
        fontSize: 33,
        color: "#eee"
    },
})
