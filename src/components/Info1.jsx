import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  Avatar,
  styled,
} from "@mui/material";

const Info1 = (props) => {
  return (
    <>
      <Box  sx={{display:"flex", flexDirection:"column", alignItems:"center" , gap:"10px"}}>
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: "#212121",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#00D062",
            }}
          />
        </Box>
        <Stack sx={{display:"flex", flexDirection:"column", justifyContent:"center" , gap:"5px"}}>
          <Typography sx={{textAlign:"center"}}>{props.title}</Typography>
          <Typography>{props.value}</Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Info1;
