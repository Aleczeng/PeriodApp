import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {LinearGradient} from "expo";
import Calendar from "../component/Calendar";

const {width} = Dimensions.get("window");
const {height} = Dimensions.get("window");

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LinearGradient colors={["#5AD427", "#FFD3E0"]} style={styles.container}>
                <View style={styles.calendarWrapper}>
                    <Calendar style={styles.calendar}/>
                </View>
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
    titleText: {
        fontFamily: "LobsterRegular",
        fontSize: 33,
        color: "#eee"
    },
    contentText: {
        fontSize: 16,
        color: "#fff"
    },
    calendarWrapper: {
        marginTop: height*0.1,
        width: width * 0.95
    },
    calendar: {
        // marginLeft: 10,
        // marginRight: 10,
    }
});
export default Home;
