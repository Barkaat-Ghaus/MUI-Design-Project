import React from "react";
import Box from "@mui/material/Box";

import {
  Typography,
  Button,
  Stack,
  Paper,
  Avatar,
  styled,
} from "@mui/material";
const Intro = () => {
  return (
    <>
      <Box position="relative">
        <Box sx={{ display: "flex" }}>
          <Box position="absolute" sx={{ top: "125px", left: "128px" }}>
            <Typography varient="h2" sx={{ color: "white", fontSize: "45px" }}>
              Hi, I am <br />
              Md Tufail E Ghaus
            </Typography>
            <Typography
              varient="h4"  
              sx={{ color: "slategray", fontSize: "20px" }}
            >
              Frontend Developer
            </Typography>
            <Stack direction="row" spacing={2} marginTop={3}>
              <Button
                variant="contained"
                sx={{ fontSize: "12px", backgroundColor: "#00D062" }}
              >
                Download cv
              </Button>
              <Button
                variant="outlined"
                sx={{ fontSize: "12px", color: "white" }}
              >
                Learn more
              </Button>
            </Stack>
          </Box>

          <Paper
            elevation={3}
            sx={{
              position: "absolute",
              top: "70px",
              left: "800px",
              width: 400,
              height: 400,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              bgcolor:"#52525c"
            }}
          >
            <Avatar
              alt="Profile Picture"
              src="./images.jpg"
              sx={{
                width: 360,
                height: 360,
              }}
            />
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Intro;
