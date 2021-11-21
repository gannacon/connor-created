import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://connorcreated.com/" target="_blank">
        Connor Created
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Connor Gannaway
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          E: connor@gannaway.org
          <br />
          P: 785-806-7967
          <br />
          <Grid
            item
            color="inherit"
            component={"a"}
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.instagram.com/gannacon/"
          >
            <InstagramIcon color="text.secondary" />
          </Grid>
          <Grid
            item
            color="inherit"
            component={"a"}
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/gannacon"
          >
            <GitHubIcon color="text.secondary" />
          </Grid>
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
