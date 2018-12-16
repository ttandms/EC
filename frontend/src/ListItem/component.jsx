import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import style from "./listitem.css";

export default class ListItem extends Component {
  render() {
    console.log(style);
    return (
      <Table className={style.root}>
        <TableHead>
          <TableRow>
            <TableCell>ツイート</TableCell>
            <TableCell>ツイートと返信</TableCell>
            <TableCell>メディア</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className={style.timeline}>
            <TableCell>AA</TableCell>
            <TableCell>AA</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}
