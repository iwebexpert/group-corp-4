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

export function CreateComment({
  privileges,

  dataInitial,
  onSave,
  onAdd,
}) {
  const [content, setContent] = useState("");
  const [iD, setID] = useState(null);
  const [pageId, setPageId] = useState(null);
  const [userId, setUserId] = useState(1);

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
      setUserId(1);
    }
  }, [dataInitial]);
  const handleContent = (e) => {
    console.log(e.target.value);
    setContent(e.target.value);
  };
  const handleSubmit = () => {
    if (privileges.isRoot) {
      return;
    }
    const data = {
      id: iD ?? uuidv4(),
      content,
      pageId,
      userId,
    };
    console.log(data);

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

CreateComment.defaultProps = {
  equipment: [],
  onDeleteEquipment: () => {},
};

CreateComment.propTypes = {
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
