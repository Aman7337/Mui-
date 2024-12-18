import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const MiddleCard = () => {
  return (
    <Box flex={4} p={2} marginTop="60px">
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default MiddleCard;
