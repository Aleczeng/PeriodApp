import React, { Component, Fragment } from "react";
import MyLoading from "./component/MyLoading";

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
