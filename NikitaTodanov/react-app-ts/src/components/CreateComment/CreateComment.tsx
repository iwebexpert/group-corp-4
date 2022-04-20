import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Button, TextField } from "@mui/material";
import { CommentPayload } from "../../actions/createcomments"

type CreateCommentProps = {
  dataInitial: CommentPayload | null,
  onAdd: (data: CommentPayload) => void
  onSave: (data: CommentPayload) => void

}


export function CreateComment({
  dataInitial,
  onSave,
  onAdd,
}: CreateCommentProps) {
  const [content, setContent] = useState<string>("");
  const [iD, setID] = useState<string | null>(null);
  const [pageId, setPageId] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>("1");

  useEffect(() => {
    if (dataInitial) {
      setID(dataInitial.id);
      setPageId(dataInitial.pageId);
      setContent(dataInitial.content);
      setUserId(dataInitial.userId);
    } else {
      setContent("");
      setID(null);
      setPageId(null);
      setUserId('1');
    }
  }, [dataInitial]);
  const handleContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setContent(e.target.value);
  };
  const handleSubmit = () => {

    const data = {
      id: iD ?? uuidv4(),
      content: content,
      pageId: pageId,
      userId: userId,
    };


    if (iD) {
      onSave(data);
    } else {
      onAdd(data);
    }
  };

  return (
    <>
      <Typography component="h2" color="primary"></Typography>
      <Table size="small">
        <TableBody>
          <TableRow style={{ margin: "10px" }}>
            <TableCell>
              <TextField
                fullWidth
                sx={{ m: 1 }}
                id="id"
                type="text"
                label="Введите ваш комментарий"
                value={content}
                onChange={handleContent}
              />
            </TableCell>
            <TableCell>
              <Button sx={{ m: 1 }} variant="outlined" onClick={handleSubmit}>
                Добавить
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

