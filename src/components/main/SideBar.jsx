import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import HouseIcon from "@mui/icons-material/House";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Groups2Icon from "@mui/icons-material/Groups2";
import ArticleIcon from "@mui/icons-material/Article";
import ModeNightIcon from "@mui/icons-material/ModeNight";

const SideBar = ({ mode, setMode }) => {
  const component = [
    {
      icon: <HouseIcon />,
      padding: "true",
      primary: "Home page",
      link: "#Home",
    },
    {
      icon: <ArticleIcon />,
      padding: "true",
      primary: "Pages",
      link: "#Page",
    },
    {
      icon: <Groups2Icon />,
      padding: "true",
      primary: "Groups",
      link: "#Page",
    },
    {
      icon: <StorefrontIcon />,
      padding: "true",
      primary: "Market Place",
      link: "#Page",
    },
    {
      icon: <PersonIcon />,
      padding: "true",
      primary: "Friends",
      link: "#Page",
    },
    {
      icon: <SettingsIcon />,
      padding: "true",
      primary: "Settings",
      link: "#Page",
    },
    {
      icon: <AccountBoxIcon />,
      padding: "true",
      primary: "Profile",
      link: "#Profile",
    },
  ];

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" sx={{ mt: 7 }}>
        <List>
          {component.map((e) => (
            <ListItem disablePadding={e.padding}>
              <ListItemButton href={e.link}>
                <ListItemIcon>{e.icon}</ListItemIcon>
                <ListItemText primary={e.primary} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem disablePadding>
            <ListItemButton href="">
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
