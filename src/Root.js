import React, {Component, Fragment} from "react";
import MyLoading from "./component/MyLoading";
import {MainBottomTabNavigator} from './navigator/MainBottomTabNavigator';

class _Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showWelcome: true,
        };
    }

    changeShowWelcome = bool => {
        this.setState({
            showWelcome: bool,
        });
    };

    render() {
        return (
            <Fragment>
                <MainBottomTabNavigator/>
                {
                    <MyLoading
                        ref={ref => {
                            global.mLoadingComponentRef = ref;
                        }}
                    />
                }
            </Fragment>
        );
    }
}

export const Root = _Root;
