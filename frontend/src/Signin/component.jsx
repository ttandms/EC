import React, { Component } from "react";
import className from "classnames";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//TODO
import { apiClient, apiPath } from "../apis";

export default class Singin extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      sent: false
    };
    this.signin = this.signin.bind(this);
  }

  async signin() {
    this.setState({ sent: true });
    const response = await apiClient.post(apiPath.example, {
      from: "component"
    });

    console.log(response);
  }

  get form() {
    const { email, password } = this.state;
    return (
      <div>
        <TextField
          error={!this.state.validEmail && email != null}
          required={true}
          fullWidth
          label="Email"
          value={email || ""}
          onChange={event => this.setState({ email: event.target.value })}
          placeholder="Email"
        />
        <TextField
          type="password"
          label="Password"
          value={password || ""}
          onChange={event => this.setState({ password: event.target.value })}
          placeholder="Password"
          fullWidth
        />
        <Button fullWidth onClick={this.signin}>
          ログイン
        </Button>

        <Link to="/signup" className={style.signup}>
          新規登録はこちら
        </Link>
      </div>
    );
  }

  render = () => {
    return (
      <div className={style.flex}>
        <Paper className={style.form}>{this.form}</Paper>
      </div>
    );
  };
}
