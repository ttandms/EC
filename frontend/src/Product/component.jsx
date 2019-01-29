import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import style from "./style.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import categories from "./categories";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControl } from "@material-ui/core";
import Dropzone from "react-dropzone";
import Avatar from "@material-ui/core/Avatar";

export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      detail: null,
      img_path: null,
      price: null,
      stock: null,
      category_div: null,
      sent: true
    };
    this.create = this.create.bind(this);
  }

  async create() {
    this.setState({ sent: true });
    this.props.dispatchers.create(
      this.state.name,
      this.state.detail,
      this.state.img_path,
      this.state.price,
      this.state.stock,
      this.state.category_div
    );
  }

  get imageUploadField() {
    return (
      <Paper className={style.section}>
        <div>商品画像</div>
        <div className={style.flex}>
          <Dropzone
            onDropAccepted={async e => {
              const file = e[0];
              const { name: image } = file;

              // upload処理

              // avatarに表示させる
              // if (file) this.setState({ file, image });
            }}
            onDropRejected={e => {
              console.log(e[0]);
            }}
            accept="image/jpeg,image/png,image/jpg"
            multiple={false}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className={style.drop}>
                <input {...getInputProps()} />
                <p>Drop files here, or click to select files</p>
              </div>
            )}
          </Dropzone>
          <Avatar src={this.state.image} alt="商品画像" />
        </div>
      </Paper>
    );
  }

  get form() {
    console.log(this);
    const { name, detail, img_path, price, stock, category_div } = this.state;
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
          label="detail"
          value={detail || ""}
          onChange={event => this.setState({ detail: event.target.value })}
        />
        <TextField
          fullWidth
          className={style.field}
          label="price"
          value={price || ""}
          onChange={event => this.setState({ price: event.target.value })}
        />
        <TextField
          fullWidth
          className={style.field}
          label="stock"
          value={stock || ""}
          onChange={event => this.setState({ stock: event.target.value })}
        />
        {this.imageUploadField}
        <FormControl component="fieldset" className={style.field}>
          <InputLabel htmlFor="category_div-select-box">カテゴリー</InputLabel>
          <Select
            error={category_div === "0"}
            className={style.select}
            value={category_div}
            native
            onChange={e => this.setState({ category_div: e.target.value })}
          >
            {categories.map(({ name, value }) => (
              <option key={`category_div_${value}`} value={value}>
                {name}
              </option>
            ))}
          </Select>
        </FormControl>

        <div className={style.field}>
          <Button fullWidth onClick={this.create} className={style.create}>
            商品登録
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
