import React from "react";
import { Box, Typography, Paper, Avatar, styled } from "@mui/material";

const SkillBox = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "10px",
  backgroundColor: "#3f3f46",
  padding: "20px",
  borderRadius: "10px",
});

const SkillImg = styled(Avatar)({
  width: 40,
  height: 40,
});

const Skills = () => {
  return (
    <Box
      sx={{
        px: { xs: "16px", sm: "40px", md: "80px" },
        py: { xs: "30px", sm: "50px" },
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          textAlign:"center",
          color: "white",
          fontSize: { xs: "26px", sm: "32px", md: "40px" },
          fontWeight: "bold",
          mb: { xs: "20px", sm: "40px" },
        }}
      >
        What I Do
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: { xs: "20px", sm: "40px", md: "60px" },
        }}
      >
        <SkillBox sx={{ width: { xs: "80%", sm: "250px" }, height: { xs: "100px", sm: "140px" } }}>
          <SkillImg src="./Vector.png" />
          <Typography sx={{ color: "#a1a1aa", fontSize: "25px" }}>
            Software Development
          </Typography>
        </SkillBox>

        <SkillBox sx={{ width: { xs: "80%", sm: "250px" }, height: { xs: "100px", sm: "140px" } }}>
          <SkillImg src="./Vector (1).png" />
          <Typography sx={{ color: "#a1a1aa", fontSize: "25px"  }}>
            Web Development
          </Typography>
        </SkillBox>
        <SkillBox sx={{ width: { xs: "80%", sm: "250px" }, height: { xs: "100px", sm: "140px" } }}>
          <SkillImg src="./Vector (2).png" />
          <Typography sx={{ color: "#a1a1aa", fontSize: "25px"  }}>
            Web Design
          </Typography>
        </SkillBox>
      </Box>
    </Box>
  );
};

export default Skills;
