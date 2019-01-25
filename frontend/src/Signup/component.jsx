import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import style from "./style.module.css";
import TextField from "@material-ui/core/TextField";

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
  }

  get form() {
    const { name, email, tell, birthday, password } = this.state;
    return (
      <div>
        <TextField
          required={true}
          fullWidth
          label="Name"
          value={name || ""}
          onChange={event => this.setState({ name: event.target.value })}
        />
        <TextField
          required={true}
          fullWidth
          label="Email"
          value={email || ""}
          onChange={event => this.setState({ email: event.target.value })}
        />
        <TextField
          fullWidth
          label="Tell No"
          value={tell || ""}
          onChange={event => this.setState({ tell: event.target.value })}
        />
        <TextField
          fullWidth
          label="Birthday"
          value={birthday || ""}
          onChange={event => this.setState({ birthday: event.target.value })}
        />
        <TextField
          required={true}
          fullWidth
          label="Password"
          value={password || ""}
          onChange={event => this.setState({ password: event.target.value })}
        />
      </div>
    );
  }

  render = () => {
    return (
      <div>
        <Paper className={style.flex}>{this.form}</Paper>
      </div>
    );
  };
}
