import React from "react";
import { Box, Typography, Button, Stack, Paper, Avatar } from "@mui/material";

const Intro = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          textAlign: { xs: "center", md: "left" },
          gap: { xs: 4, md: 50 }, 
          mt: { xs: 6, md: 10 },
          px: { xs: 2, sm: 4 },
        }}
      >

        <Box>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontSize: { xs: "28px", sm: "36px", md: "45px" },
              fontWeight: "bold",
            }}
          >
            Hi, I am <br />
            Md Tufail E Ghaus
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: "slategray",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              mt: 1,
            }}
          >
            Frontend Developer
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent={{ xs: "center", md: "flex-start" }}
            marginTop={3}
          >
            <Button
              variant="contained"
              sx={{
                fontSize: { xs: "10px", sm: "12px" },
                backgroundColor: "#00D062",
                "&:hover": { backgroundColor: "#00b854" },
              }}
            >
              Download CV
            </Button>
            <Button
              variant="outlined"
              sx={{
                fontSize: { xs: "10px", sm: "12px" },
                color: "white",
                borderColor: "white",
                "&:hover": { borderColor: "#00D062", color: "#00D062" },
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Box>
        <Paper
          elevation={3}
          sx={{
            width: { xs: 220, sm: 280, md: 400 },
            height: { xs: 220, sm: 280, md: 400 },
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            bgcolor: "#52525c",
          }}
        >
          <Avatar
            alt="Profile Picture"
            src="./images.jpg"
            sx={{
              width: { xs: 200, sm: 260, md: 360 },
              height: { xs: 200, sm: 260, md: 360 },
            }}
          />
        </Paper>
      </Box>
    </>
  );
};

export default Intro;
