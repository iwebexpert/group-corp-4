import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";


import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


export function CreateCommentTable({ comments }) {
  return (
    <>
      <Typography component="h2" color="primary">
        Комментарии к страницам
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Контент</TableCell>
            <TableCell>UserID</TableCell>
            <TableCell>PageID</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comments.map((obj, index) => (
            <React.Fragment key={index}>
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{obj.content}</TableCell>
                <TableCell>{obj.pageId}</TableCell>
                <TableCell>{obj.userId.toString()}</TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

CreateCommentTable.defaultProps = {
  equipment: [],
  onDeleteEquipment: () => {},
};

CreateCommentTable.propTypes = {
  equipment: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      content: PropTypes.string,
      userId: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
        .isRequired,
    })
  ),
  onDeleteEquipment: PropTypes.func.isRequired,
};
