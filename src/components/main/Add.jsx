import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import DateRangeIcon from "@mui/icons-material/DateRange";

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip onClick={(e) => setOpen(true)}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography
            variant="h6"
            color="grey"
            textAlign="center"
            fontWeight={700}
            fontFamily="sans-serif"
          >
            Create Post
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginBottom: "20px",
            }}
          >
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
            <Typography fontWeight={800}>John Deo</Typography>
          </Box>
          <TextField
            sx={{ width: "100%" }}
            id="filled-multiline-static"
            multiline
            rows={3}
            placeholder="Enter the Post.."
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideocamIcon color="success" />
            <PersonAddAlt1Icon color="error" />
          </Stack>

          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="Basic button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
