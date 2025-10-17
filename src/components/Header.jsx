import React from "react";
import { AppBar, Toolbar, Typography, Button, Stack, styled } from "@mui/material";

const Header = () => {
  const NavButton = styled(Button)(({ theme }) => ({
    color: "white",
    marginTop: "10px",
    fontSize: "20px",
    textTransform: "none",
    borderRadius: "12px",
    "&:hover": {
      color: "#00D062",
    },
  }));

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "transparent",
          px: { xs: 2, sm: 4 },
          py: 1,
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#00D062",
              fontSize: { xs: "32px", sm: "40px" },
              fontWeight: "bold",
              mb: { xs: 1, sm: 0 },
            }}
          >
            Portfolio
          </Typography>

          {/* Nav Buttons visible only on larger screens */}
          <Stack
            direction="row"
            spacing="20px"
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          >
            <NavButton>About</NavButton>
            <NavButton>Skills</NavButton>
            <NavButton>Contact</NavButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
