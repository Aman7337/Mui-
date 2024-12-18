import React from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/main/SideBar";
import { Box, Stack } from "@mui/material";
import RightBar from "../components/main/RightBar";
import MiddleCard from "../components/main/MiddleCard";
import Add from "../components/main/Add";

const Home = () => {
  return (
    <Box>
      <Header />
      <Stack
        direction="row"
        spacing={0}
        paddingTop={2}
        justifyContent="space-between"
      >
        <SideBar />
        <MiddleCard />
        <RightBar />
      </Stack>
      <Add />
    </Box>
  );
};

export default Home;
