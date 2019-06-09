import React from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import {LastPeriodDate} from "../screen/LastPeriodDate";

const _InitialLoginStackNavigator = createStackNavigator({
    LastPeriodDate: {
        screen: props => <LastPeriodDate {...props}/>,
        navigationOptions: {
            header: null
        }
    }
});

export const InitialLoginStackNavigator = createAppContainer(_InitialLoginStackNavigator);
