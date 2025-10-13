import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  styled,
  Stack,
} from "@mui/material";

const Contact = () => {
  const BoxGrid = styled(Grid)(() => ({
    display: "flex",
    gap: "25%",
  }));
  const ContactField = styled(TextField)(() => ({
    
    input: {
      color: "#a1a1aa",
    },
    "&:hover .MuiInput-underline:before": {
      textDecoration: "none",
    },
    fontSize: "25px",
  }));
  return (
    <>
      <Box position="relative">
        <Box
          position="absolute"
          sx={{
            display: "flex",
            flexDirection: "column",
            top: "1580px",
            width: "100%",
          }}
        >
          <Typography sx={{ textAlign: "center" }} variant="h3">
            Get In Touch
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "25px",
              marginLeft: "30%",
              marginY: "50px",
            }}
          >
            <BoxGrid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <ContactField
                  placeholder="First Name"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ContactField
                  placeholder="Last Name"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </BoxGrid>
            <BoxGrid container spacing={2}>
              <Grid item xs={12}>
                <ContactField
                  placeholder="Email"
                  type="email"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <ContactField
                  placeholder="Phone Number"
                  type="phone"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </BoxGrid>
            <TextField
              sx={{
                width: "67%",
                input: {
                  color: "#a1a1aa",
                },
              }}
              placeholder="message"
              type="text"
              variant="outlined"
              fullWidth
            />
   <Button
   disableElevation
   disableRipple
   sx={{width: "67%",
    backgroundColor:"#00D062",
    height:"50px",
    fontSize:"18px"

   }}
    type="submit" variant="contained">
        Submit
      </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
