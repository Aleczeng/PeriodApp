import React, {Component} from 'react';
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import {View, Text, StyleSheet} from 'react-native';

const _MainBottomTabNavigator = createBottomTabNavigator({
    Home: {
        screen: () => (<View>
            <Text>
                abc
            </Text>
        </View>),
        navigationOptions: {}
    }
});

export const MainBottomTabNavigator = createAppContainer(_MainBottomTabNavigator);
