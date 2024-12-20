import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Badge,
  InputBase,
} from "@mui/material";
import React from "react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";

const Header = ({ mode }) => {
  return (
    <AppBar position="fixed" sx={{}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ gap: 1.3 }}
          >
            <LocalLibraryIcon />
            <Typography variant="h6" component="div">
              LOGO
            </Typography>
          </IconButton>
        </Box>
        <Box
          sx={{
            backgroundColor: mode === "light" ? "white" : "black",
            width: 500,
            pl: 4,
            borderRadius: "10px",
            padding: "1px 10px",
          }}
        >
          {" "}
          <InputBase
            placeholder="search..."
            sx={{
              width: { xs: "100px", sm: "400px", md: "400px", xl: "500" },
              backgroundColor: mode === "light" ? "white" : "black",
              color: mode === "light" ? "black" : "white",
            }}
          ></InputBase>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            sx={{ marginRight: "-17px" }}
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            sx={{ display: { xs: "none", sm: "none", lg: "block" } }}
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Avatar alt="Profile Image" sx={{ width: 30, height: 30 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
