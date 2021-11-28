import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Contact() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          p: { xs: 3, md: 6 },
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <Typography component="h1" variant="h4" color="inherit" gutterBottom>
          Let's talk.{" "}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
