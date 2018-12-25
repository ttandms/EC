import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import style from "./listitem.css";
import apis from "../apis";
import Button from "@material-ui/core/Button";

export default class ListItem extends Component {
  getData = () => {};
  render() {
    console.log(apis());
    return (
      <div>
        <Table className={style.root}>
          <TableHead className={style.head}>
            <TableRow>
              <TableCell>ツイート</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={style.timeline}>
              <TableCell>AA</TableCell>
              <TableCell>AA</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button onClick={this.getData()} />
      </div>
    );
  }
}
