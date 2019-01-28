import React, { Component } from "react";

export default class NoLogin extends Component {
  constructor(props) {
    super();
  }
  componentDidMount = () => {
    this.props.dispatchers.userWillTransfer();
  };
  render = () => {
    return <div />;
  };
}
