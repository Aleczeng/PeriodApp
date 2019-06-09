import React, {Component, Fragment} from "react";
import MyLoading from "./component/MyLoading";
import {MainBottomTabNavigator} from './navigator/MainBottomTabNavigator';
import {LastPeriodDate} from "./screen/LastPeriodDate";
import {connect} from 'react-redux';
import {InitialLoginStackNavigator} from "./navigator/InitialLoginStackNavigator";

class _Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showWelcome: true,
        };
    }

    render() {
        console.warn("isFirstTimeLogin", this.props.isFirstTimeLogin);

        return (
            <Fragment>
                {this.props.isFirstTimeLogin ? <InitialLoginStackNavigator fontLoaded={this.props.fontLoaded}/> :
                    <MainBottomTabNavigator/>}
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

const mapStateToProps = (state) => ({
    isFirstTimeLogin: state.global.isFirstTimeLogin
});
export const Root = connect(mapStateToProps, null)(_Root);
