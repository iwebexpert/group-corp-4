import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import styled from "@emotion/styled";

const DeleteIconCustom = styled(DeleteIcon)`
  color: blue;
  opacity: 0.5:
  cursor: pointer;

`;

const EditIconCustom = styled(EditIcon)`
  color: green;
  cursor: pointer;
`;
const AddToComment = styled(AddIcon)`
  color: green;
  cursor: pointer;
`;

export function CreatePageTable({ pages, onDeletePage, onEditPageMode }) {
  return (
    <>
      <Typography component="h2" color="primary">
        Созданные страницы
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>URL</TableCell>
            <TableCell>Наименование</TableCell>
            <TableCell>Контент</TableCell>
            <TableCell>UserID</TableCell>
            <TableCell>Изменить</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pages.map((obj, index) => (
            <React.Fragment key={index}>
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{obj.url}</TableCell>
                <TableCell>{obj.title}</TableCell>
                <TableCell>{obj.content}</TableCell>
                <TableCell>{obj.userId.toString()}</TableCell>
                <TableCell>
                  <EditIconCustom
                    color="secondary"
                    onClick={() => onEditPageMode(obj.id)}
                  />
                  <DeleteIconCustom
                    color="secondary"
                    onClick={() => onDeletePage(obj.id)}
                  />
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

CreatePageTable.defaultProps = {
  equipment: [],
  onDeleteEquipment: () => {},
};

CreatePageTable.propTypes = {
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
