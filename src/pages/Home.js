import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FeaturedPost from "./components/FeaturedPost";
import RecentPosts from "./components/RecentPosts";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <>
      <FeaturedPost />

      <Box
        sx={{
          position: "relative",
          p: { xs: 3, md: 6 },
        }}
      >
        <Typography component="h1" variant="h4" color="inherit" gutterBottom>
          Here are some of my most recent projects:
        </Typography>

        <Grid container spacing={4}>
          <RecentPosts />
        </Grid>
      </Box>
    </>
  );
}
