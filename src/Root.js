import React, {Component, Fragment} from "react";
import MyLoading from "./component/MyLoading";
import {MainBottomTabNavigator} from './navigator/MainBottomTabNavigator';
import {InitialLoginPage} from "./screen/InitialLoginPage";
import {connect} from 'react-redux';

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
        console.warn();
        return (
            <Fragment>
                {this.props.isFirstTimeLogin ? <InitialLoginPage fontLoaded={this.props.fontLoaded}/> :
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
