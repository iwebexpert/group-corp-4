import React from "react";



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

type CreatePageItem = {
  id: string,
  url: string,
  title: string,
  content: string,
  userId: string
}

type CreatePageTableProps = {
  pages: CreatePageItem[],
  onDeletePage: (id: string) => void
  onEditPageMode: (id: string) => void
}

const CreatePageTable: React.FC<CreatePageTableProps> = ({ pages, onDeletePage, onEditPageMode }) => {
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

export default CreatePageTable