import React, { Component } from "react";
import className from "classnames";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Singin extends Component {
  constructor(props) {
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
    this.props.dispatchers.Singin(this.state.email, this.state.password);
  }

  get form() {
    const { email, password } = this.state;
    console.log(this.props.user);
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
          required={true}
          className={style.field}
          value={password || ""}
          onChange={event => this.setState({ password: event.target.value })}
          placeholder="Password"
          fullWidth
        />
        <div className={style.field}>
          <Button fullWidth onClick={this.signin} className={style.signin}>
            ログイン
          </Button>
        </div>

        <Link to="/signup" className={style.signup}>
          新規登録はこちら
        </Link>
        {this.props.user && this.props.user.apple ? (
          <div>
            name:
            {this.props.user.apple}
          </div>
        ) : null}
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
