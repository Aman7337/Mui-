import React, { useState } from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/main/SideBar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import RightBar from "../components/main/RightBar";
import MiddleCard from "../components/main/MiddleCard";
import Add from "../components/main/Add";

const Home = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        component="div"
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Header mode={mode} />
        <Stack
          direction="row"
          spacing={0}
          paddingTop={2}
          justifyContent="space-between"
        >
          <SideBar setMode={setMode} mode={mode} />
          <MiddleCard />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
