import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  styled,
} from "@mui/material";

const Header = () => {
  const NavButton = styled(Button)(() => ({
    color: "white",
    marginTop:"10px",
    fontSize:"20px",
    textTransform:"none",
    borderRadius:"12px",
    '&:hover':{
        color:"#00D062",
    }
  }));

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ bgcolor: "transparent", paddingX: "25px" }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h1" sx={{ flexGrow: 1, color:"#00D062", fontSize:"40px", marginTop:"10px" }}>
            Portfolio
          </Typography>
          <Stack
            direction="row"
            spacing="20px"
          >
            <NavButton>About</NavButton>
            <NavButton>Skils</NavButton>
            <NavButton>Contact</NavButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
