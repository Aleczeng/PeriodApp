import React from 'react';
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import {View, Text} from 'react-native';
import {TabBarIcon} from "../component/TabBarIcon";
import TabBarComponent from "../component/TabBarComponent";
import Home from "../screen/Home";


const _MainBottomTabNavigator = createBottomTabNavigator({
        Home: {
            screen: () => <Home/>,
            navigationOptions: () => ({
                tabBarIcon: props => <TabBarIcon name="ios-fitness" {...props} />,
                tabBarLabel: "fitness",
            }),
        }, Info: {
            screen: () => (<View>
                <Text>
                    info
                </Text>
            </View>),
            navigationOptions: () => ({
                tabBarIcon: props => <TabBarIcon name="ios-fitness" {...props} />,
                tabBarLabel: "fitness",
            }),
        }, Abc: {
            screen: () => (<View>
                <Text>
                    info
                </Text>
            </View>),
            navigationOptions: () => ({
                tabBarIcon: props => <TabBarIcon name="ios-fitness" {...props} />,
                tabBarLabel: "fitness",
            }),
        }, Def: {
            screen: () => (<View>
                <Text>
                    info
                </Text>
            </View>),
            navigationOptions: () => ({
                tabBarIcon: props => <TabBarIcon name="ios-fitness" {...props} />,
                tabBarLabel: "fitness",
            }),
        },
    },
    {
        tabBarOptions: {
            activeTintColor: "#eee",
            inactiveTintColor: "#c69",
            inactiveBackgroundColor: "#57c5b8",
            // style: {
            //     backgroundColor: "#57c5b8"
            // }
        },
        tabBarComponent: props => <TabBarComponent {...props} />,
    });

export const MainBottomTabNavigator = createAppContainer(_MainBottomTabNavigator);
