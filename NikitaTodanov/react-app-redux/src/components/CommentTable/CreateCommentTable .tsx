import React, { useState, useEffect } from "react";



import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

type CreateCommentItem = {
  id: string,
  pageId: string,
  userId: string,
  content: string,

}
type CreateCommentTableProps = {
  comments: CreateCommentItem[],

}

export const CreateCommentTable: React.FC<CreateCommentTableProps> = ({ comments }) => {
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

export default CreateCommentTable