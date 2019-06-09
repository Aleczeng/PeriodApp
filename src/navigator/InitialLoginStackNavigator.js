import React from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import {LastPeriodDate} from "../screen/initialLogins/LastPeriodDate";
import {CycleLength} from "../screen/initialLogins/CycleLength";
import {PeriodLength} from "../screen/initialLogins/PeriodLength";

const _InitialLoginStackNavigator = createStackNavigator({
    LastPeriodDate: {
        screen: props => <LastPeriodDate {...props}/>,
        navigationOptions: {
            header: null
        }
    },
    CycleLength: {
        screen: props => <CycleLength {...props}/>,
        navigationOptions: {
            header: null
        }
    },
    PeriodLength: {
        screen: props => <PeriodLength {...props}/>,
        navigationOptions: {
            header: null
        }
    }
});

export const InitialLoginStackNavigator = createAppContainer(_InitialLoginStackNavigator);
