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
            top: "1980px",
            width: "100%",
          }}
        >
          <Typography sx={{ textAlign: "center",fontSize:"17px",marginLeft:"120px",color: "#a1a1aa", marginY:"15px" }} variant="h6">
         © All Rights Reserved 2025
          </Typography>

        </Box>
      </Box>
    </>
  );
};

export default Footer