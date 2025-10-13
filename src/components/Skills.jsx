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

const Skills = () => {
  const SkillBox = styled(Paper)(() => ({display:"flex", flexDirection:"column",gap:"20px", backgroundColor:" #3f3f46",margin:"30px",padding:"35px",height:"120px", width:"15%",borderRadius:"10px"}));
  const SkillImg = styled(Avatar)(() => ({ width: 40, height: 40 }));
  return (
    <>
      <Box position="relative">
        <Box
          position="absolute"
          sx={{ top: "950px", marginX: "150px", width: "80%" }}
        >
          <Typography sx={{ textAlign: "center" }} variant="h3">
            What I do
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <SkillBox elevation={2}>
              <SkillImg  src="./Vector.png" />
              <Typography variant="h5" color="#a1a1aa">
                Software Developement
              </Typography>
            </SkillBox>
               <SkillBox elevation={1}>
              <SkillImg  src="./Vector (1).png" />
              <Typography variant="h5" color="#a1a1aa">
                Web Developement{" "}
              </Typography>
            </SkillBox>
               <SkillBox elevation={2}>
              <SkillImg  src="./Vector (2).png" />
              <Typography variant="h5" color="#a1a1aa">
                Web <br />Design
              </Typography>
            </SkillBox>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
