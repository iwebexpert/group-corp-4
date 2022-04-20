import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";
import CommentIcon from "@mui/icons-material/Comment";
import PeopleIcon from "@mui/icons-material/People";

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

    <ListItemButton component={Link} to="/pages">
      <ListItemIcon>
        <AutoStoriesIcon />
      </ListItemIcon>
      <ListItemText primary="Страницы" />
    </ListItemButton>
    <ListItemButton component={Link} to="/users">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Пользователи" />
    </ListItemButton>
    <ListItemButton component={Link} to="/comments">
      <ListItemIcon>
        <CommentIcon />
      </ListItemIcon>
      <ListItemText primary="Коментарии" />
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

export const secondaryListItemsUser = (
  <>
    <ListSubheader component="div" inset></ListSubheader>
    <ListItemButton component={Link} to="/profile">
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Профиль" />
    </ListItemButton>
    <ListItemButton component={Link} to="/comments">
      <ListItemIcon>
        <CommentIcon />
      </ListItemIcon>
      <ListItemText primary="Коментарии" />
    </ListItemButton>
    <ListItemButton component={Link} to="/logout">
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Выход" />
    </ListItemButton>
  </>
);
