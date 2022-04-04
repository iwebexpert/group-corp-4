import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from '@mui/icons-material/Info';

import { Link } from "react-router-dom";

export const mainListItems = (
  <>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Создать страницу" />
    </ListItemButton>
  </>
);

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset></ListSubheader>
    <ListItemButton component={Link} to="/profile">
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Профиль" />
    </ListItemButton>
    <ListItemButton component={Link} to="/stats">
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="Логи" />
    </ListItemButton>
    <ListItemButton component={Link} to="/logout">
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Выход" />
    </ListItemButton>
  </>
);
