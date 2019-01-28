import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import style from "./style.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      tell: null,
      birthday: null,
      password: false,
      sent: false
    };
    this.signup = this.signup.bind(this);
  }

  async signup() {
    this.setState({ sent: true });
    this.props.dispatchers.singup(
      this.state.name,
      this.state.email,
      this.state.tell,
      this.state.birthday,
      this.state.password
    );
  }

  get form() {
    const { name, email, tell, birthday, password } = this.state;
    return (
      <div>
        <TextField
          required={true}
          fullWidth
          className={style.field}
          label="Name"
          value={name || ""}
          onChange={event => this.setState({ name: event.target.value })}
        />
        <TextField
          required={true}
          fullWidth
          className={style.field}
          label="Email"
          value={email || ""}
          onChange={event => this.setState({ email: event.target.value })}
        />
        <TextField
          fullWidth
          className={style.field}
          label="Tell No"
          value={tell || ""}
          onChange={event => this.setState({ tell: event.target.value })}
        />
        <TextField
          fullWidth
          className={style.field}
          label="Birthday"
          value={birthday || ""}
          onChange={event => this.setState({ birthday: event.target.value })}
        />
        <TextField
          type="password"
          required={true}
          fullWidth
          className={style.field}
          label="Password"
          value={password || ""}
          onChange={event => this.setState({ password: event.target.value })}
        />
        <div className={style.field}>
          <Button fullWidth onClick={this.signup} className={style.signup}>
            登録
          </Button>
        </div>
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
