import React from 'react'
import {
  Box,
  Typography,

} from "@mui/material";
const Footer = () => {
 
  return (
    <>
      <Box position="relative">
        <Box
          position="absolute"
          sx={{
            width: "100%",
          }}
        >
          <Typography sx={{ textAlign: "center",fontSize:"17px",color: "#a1a1aa", marginY:"15px" }} variant="h6">
         © All Rights Reserved 2025
          </Typography>

        </Box>
      </Box>
    </>
  );
};

export default Footer