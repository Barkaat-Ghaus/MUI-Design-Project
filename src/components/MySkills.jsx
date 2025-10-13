import React from "react";
import { Box, Typography, Paper, styled, Stack } from "@mui/material";

const MySkills = () => {
  const MyskillBox = styled(Paper)(() => ({
    backgroundColor:"#52525c",
    display:"flex",
    justifyContent:"space-around",
    padding:"20px",
    margin:"25px",
    borderRadius:"10px"
  }));
  const SkillStack = styled(Stack)(() => ({

  }));
  return (
    <>
      <Box position="relative">
        <Box
          position="absolute"
          sx={{ top: "1300px", marginX: "150px", width: "80%" }}
        >
          <Typography sx={{ textAlign: "center" }} variant="h3">
            My Skills
          </Typography>

          <MyskillBox elevation={2}>
            <SkillStack>
              <Typography variant="h3" color="#a1a1aa">90%</Typography>
              <Typography variant="h6"  color="#00D062"  textAlign="center" >HTML</Typography>
            </SkillStack>
              <SkillStack>
              <Typography variant="h3" color="#a1a1aa">80%</Typography>
              <Typography variant="h6"  color="#00D062"  textAlign="center" >CSS</Typography>
            </SkillStack>
              <SkillStack>
              <Typography variant="h3" color="#a1a1aa">70%</Typography>
              <Typography variant="h6"  color="#00D062"  textAlign="center" >JS</Typography>
            </SkillStack>
              <SkillStack>
              <Typography variant="h3" color="#a1a1aa" >60%</Typography>
              <Typography variant="h6"  color="#00D062"  textAlign="center" > REACT</Typography>
            </SkillStack>
          </MyskillBox>
        </Box>
      </Box>
    </>
  );
};

export default MySkills;
