import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {LinearGradient} from "expo";
// import Calendar from 'react-native-calendar-select';
import {connect} from "react-redux";
import * as actions from '../../store/actions';
import {ReminderModal} from "../../component/ReminderModal";
import {formatYYYYMMDDFromDate} from "../../utils/formatMonthandDay";
import DateTimePicker from "react-native-modal-datetime-picker";

class _CycleLength extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false
        };
    }

    showDateTimePicker = () => {
        this.setState({isDateTimePickerVisible: true});
    };

    hideDateTimePicker = () => {
        this.setState({isDateTimePickerVisible: false});
    };

    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.props.setIsFirstTimeLogin(false);
        this.hideDateTimePicker();
    };


    componentDidMount() {
        this.setState({showReminderModal: false});
        // this.props.setIsFirstTimeLogin(true);
    }


    render() {
        return (
            <LinearGradient colors={["#EF4DB6", "#C643FC"]} style={styles.container}>
                <Text style={styles.titleText}>
                    Cycle Length
                </Text>
                <Text style={styles.contentText}>
                    The duration of two periods start date, usually 23-35 days
                </Text>
                <View>
                    <Button title="Show DatePicker" onPress={this.showDateTimePicker}/>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                    />
                </View>
                <ReminderModal
                    showReminderModal={this.state.showReminderModal}
                    reminderTitle={this.state.reminderTitle}
                    reminderContent={this.state.reminderContent}
                    handleCloseReminder={this.props.setIsFirstTimeLogin}
                    hideConfirmButton={true}
                />
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
    }
});
const mapActionToState = (dispatch) => ({
    setIsFirstTimeLogin: (bool = false) => dispatch(actions.setIsFirstTimeLoginAction(bool)),
});
export const CycleLength = connect(null, mapActionToState)(_CycleLength);
