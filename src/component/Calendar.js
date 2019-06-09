import React, {Component} from "react";
import {Text, View, Dimensions, StyleSheet, Button} from "react-native";

const {width} = Dimensions.get("window");
const {height} = Dimensions.get("window");

class Calendar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.calendarWrapper}>
                <View style={styles.calendarTitle}>
                    <Text style={styles.calendarTitleText}>Date</Text>
                </View>
                <View style={styles.calendarButtonWrapper}>
                    <Button style={styles.calendarButton} title='Today' onPress={() => console.warn('today')}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    calendarWrapper: {
        width: '100%',
        height: height * 0.75,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10
    },
    calendarTitle: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderColor: '#a8a4a4',
    },
    calendarTitleText: {
        marginBottom: 20
    },
    calendarButtonWrapper: {
        position: `absolute`,
        left: 0,
        right: 0,
        bottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    calendarButton: {
        width: 20,
        height: 20,
        backgroundColor: '#cc80b5'
    }
});

export default Calendar;
