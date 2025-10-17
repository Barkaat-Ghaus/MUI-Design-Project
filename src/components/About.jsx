import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Info1 from "./Info1.jsx";

const About = () => {
  return (
    <>
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 10 },
          py: { xs: 4, sm: 6 },
          textAlign: "center",
        }}
      >
        {/* Section Title and Description */}
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            mb: { xs: 4, sm: 6 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "28px", sm: "36px", md: "45px" },
              fontWeight: "bold",
              color: "white",
            }}
          >
            About
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              color: "white",
              maxWidth: "800px",
              mt: 2,
              lineHeight: 1.6,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            consequuntur dicta voluptas libero architecto quam sit. Qui tempore
            distinctio amet asperiores ad, nam, et fuga placeat, quasi quod quis
            aut? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique consequuntur dicta voluptas libero architecto quam sit. Qui
            tempore distinctio amet asperiores ad, nam, et fuga placeat, quasi
            quod quis.
          </Typography>
        </Stack>

        {/* Info Boxes */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 3, sm: 4, md: 6 },
            mt: { xs: 2, sm: 4 },
          }}
        >
          <Info1 title="Full Name" value="Md Tufail E Ghaus" />
          <Info1 title="Email" value="barkaatghaus@gmail.com" />
          <Info1 title="Linkedin" value="Md Tufail E Ghaus" />
          <Info1 title="Phone" value="+91 8409470427" />
        </Box>
      </Box>
    </>
  );
};

export default About;
