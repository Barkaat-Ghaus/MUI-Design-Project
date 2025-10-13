import React from "react";
import {
  Box,
  Typography,
  Stack,
} from "@mui/material";

import Info1 from "./Info1.jsx";

const About = () => {
  return (
    <>
      <Box position="relative" sx={{ marginX: "50px" }}>
        <Box position="absolute" sx={{ top: "515px" , marginX:"150px"}}>
          <Box>
            {" "}
            <Stack sx={{ display: "flex", justifyContent: "center"  }}>
              <Typography
                varient="h3"
                sx={{ textAlign: "center", fontSize: "45px" }}
              >
                About
              </Typography>
              <Typography
                varient="body1"
                sx={{ textAlign: "center", fontSize: "20px", marginY: "20px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique consequuntur dicta voluptas libero architecto quam
                sit. Qui tempore distinctio amet asperiores ad, nam, et fuga
                placeat, quasi quod quis aut? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Similique consequuntur dicta
                voluptas libero architecto quam sit. Qui tempore distinctio amet
                asperiores ad, nam, et fuga placeat, quasi quod quis 
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ display: "flex", justifyContent:"space-between", marginY: "20px" }}>
            <Info1 title="Full Name" value="Md Tufail E Ghaus" />
            <Info1 title="Email" value="barkaatghaus@gmail.com" />
            <Info1 title="Linkedin" value="Md Tufail E Ghaus" />
            <Info1 title="Phone" value="+91 8409470427" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
