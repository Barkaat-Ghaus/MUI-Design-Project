import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  styled,
} from "@mui/material";

const Contact = () => {
  const BoxGrid = styled(Grid)(() => ({
    display: "flex",
    gap: "25%",
    flexDirection: "row", 
    justifyContent:"center"
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
    <Box
      sx={{
        px: { xs: "20px", sm: "80px" },
        py: { xs: "40px", sm: "80px" },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "white",
          fontSize: { xs: "26px", sm: "50px" },
          mb: { xs: "30px", sm: "50px" },
        }}
      >
        Get In Touch
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
        }}
      >
        {/* Name Fields */}
        <BoxGrid
          container
          spacing={2}
          sx={{
            flexDirection: { xs: "column", sm: "row" }, // 👈 responsive change here
            gap: { xs: "20px", sm: "25%" },
            width: { xs: "90%", sm: "67%" },
          }}
        >
          <Grid item xs={12} sm={6}>
            <ContactField placeholder="First Name" variant="standard" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ContactField placeholder="Last Name" variant="standard" fullWidth />
          </Grid>
        </BoxGrid>

        {/* Contact Info Fields */}
        <BoxGrid
          container
          spacing={2}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "20px", sm: "25%" },
            width: { xs: "90%", sm: "67%" },
          }}
        >
          <Grid item xs={12} sm={6}>
            <ContactField placeholder="Email" type="email" variant="standard" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ContactField placeholder="Phone Number" type="phone" variant="standard" fullWidth />
          </Grid>
        </BoxGrid>

        {/* Message Field */}
        <TextField
          placeholder="Message"
          type="text"
          variant="outlined"
          fullWidth
          sx={{
            width: { xs: "90%", sm: "67%" },
            input: { color: "#a1a1aa" },
          }}
        />

        {/* Submit Button */}
        <Button
          disableElevation
          disableRipple
          type="submit"
          variant="contained"
          sx={{
            width: { xs: "90%", sm: "67%" },
            backgroundColor: "#00D062",
            height: "50px",
            fontSize: "18px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#00b857",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
