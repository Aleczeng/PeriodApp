import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {LinearGradient} from "expo";
import Calendar from 'react-native-calendar-select';
import {connect} from "react-redux";
import * as actions from '../store/actions';
import {setIsFirstTimeLogin} from "../store/actions";
import {ReminderModal} from "../component/ReminderModal";
import {formatYYYYMMDDFromDate} from "../utils/formatMonthandDay";

class _InitialLoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date()
        };
        this.confirmDate = this.confirmDate.bind(this);
        this.openCalendar = this.openCalendar.bind(this);
    }

    componentDidMount() {
        this.setState({showReminderModal: false});
        // this.props.setIsFirstTimeLogin(true);
    }

// when confirm button is clicked, an object is conveyed to outer component
// contains following property:
// startDate [Date Object], endDate [Date Object]
// startMoment [Moment Object], endMoment [Moment Object]
    confirmDate = async ({startDate, endDate, startMoment, endMoment}) => {
        if (parseInt(formatYYYYMMDDFromDate(endDate), 10) - parseInt(formatYYYYMMDDFromDate(startDate), 10) > 15) {
            await this.setState({
                showReminderModal: true,
                reminderTitle: "Invalid Period",
                reminderContent: "Please choose valid period!"
            })
        }
        await this.setState({
            startDate,
            endDate
        });
        await this.props.setIsFirstTimeLogin(false);
        console.warn('startDate', this.state.startDate);
        console.warn('endDate', this.state.endDate);
    };

    openCalendar() {
        this.calendar && this.calendar.open();
    }

    render() {
        let customI18n = {
            'w': ['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
            'weekday': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            'text': {
                'start': 'Start Date',
                'end': 'End Date',
                'date': 'Date',
                'save': 'Confirm',
                'clear': 'Reset'
            },
            'date': 'DD / MM'  // date format
        };
        // optional property, too.
        let color = {
            subColor: '#f0f0f0'
        };
        return (
            <LinearGradient colors={["#EF4DB6", "#C643FC"]} style={styles.container}>
                {this.props.fontLoaded && <Text style={styles.titleText}>
                    Last Period Date
                </Text>}
                <Text style={styles.contentText}>
                    The start and end date of your last period
                </Text>
                <View>
                    <Button title="Select" onPress={this.openCalendar}/>
                    <Calendar
                        i18n="en"
                        ref={(calendar) => {
                            this.calendar = calendar;
                        }}
                        customI18n={customI18n}
                        color={color}
                        format="YYYYMMDD"
                        minDate="20180510"
                        maxDate="20181210"
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onConfirm={this.confirmDate}
                    />
                </View>
                <ReminderModal
                    showReminderModal={this.state.showReminderModal}
                    reminderTitle={this.state.reminderTitle}
                    reminderContent={this.state.reminderContent}
                    handleCloseReminder={this.props.setIsFirstTimeLogin(false)}
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
    setIsFirstTimeLogin: (bool) => dispatch(actions.setIsFirstTimeLoginAction(bool)),
});
export const InitialLoginPage = connect(null, mapActionToState)(_InitialLoginPage);
