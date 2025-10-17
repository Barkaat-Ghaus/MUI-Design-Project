import React from "react";
import { Box, Typography, Paper, Stack, styled } from "@mui/material";

const MySkills = () => {
  const MyskillBox = styled(Paper)(() => ({
    backgroundColor: "#52525c",
    display: "flex",
    justifyContent: "space-around",
    padding: "20px",
    margin: "15px auto",
    borderRadius: "10px",
    flexWrap: "wrap",
  }));

  const SkillStack = styled(Stack)(() => ({
    justifyContent: "center",
    flexDirection: "column",
    margin: "10px",
  }));

  return (
    <Box
      sx={{
        px: { xs: "20px", sm: "60px" },
        py: { xs: "40px", sm: "60px" },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "white",
          fontSize: { xs: "26px", sm: "36px" },
          mb: { xs: "20px", sm: "40px" },
        }}
      >
        My Skills
      </Typography>
      <MyskillBox
        elevation={3}
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "20px", sm: "40px" },
        }}
      >
        <SkillStack>
          <Typography
            variant="h3"
            sx={{ color: "#a1a1aa", fontSize: { xs: "20px", sm: "50px" } }}
          >
            90%
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#00D062",
              textAlign: "center",
              fontSize: { xs: "14px", sm: "18px" },
            }}
          >
            HTML
          </Typography>
        </SkillStack>

        <SkillStack>
          <Typography
            variant="h3"
            sx={{ color: "#a1a1aa", fontSize: { xs: "20px", sm: "50px" } }}
          >
            80%
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#00D062",
              textAlign: "center",
              fontSize: { xs: "14px", sm: "18px" },
            }}
          >
            CSS
          </Typography>
        </SkillStack>
        <SkillStack>
          <Typography
            variant="h3"
            sx={{ color: "#a1a1aa", fontSize: { xs: "20px", sm: "50px" } }}
          >
            70%
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#00D062",
              textAlign: "center",
              fontSize: { xs: "14px", sm: "18px" },
            }}
          >
            JS
          </Typography>
        </SkillStack>

        <SkillStack>
          <Typography
            variant="h3"
            sx={{ color: "#a1a1aa", fontSize: { xs: "20px", sm: "50px" } }}
          >
            60%
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#00D062",
              textAlign: "center",
              fontSize: { xs: "14px", sm: "18px" },
            }}
          >
            REACT
          </Typography>
        </SkillStack>
      </MyskillBox>
    </Box>
  );
};
export default MySkills;
