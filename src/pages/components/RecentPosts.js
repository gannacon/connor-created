import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

function FeaturedPost() {
  return (
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
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: "flex" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  This is a title
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Post Date
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  Post Description
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { sm: "block" } }}
                image={"https://picsum.photos/200/300"}
                alt="Filler text"
              />
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: "flex" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  This is a title
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Post Date
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  Post Description
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { sm: "block" } }}
                image={"https://picsum.photos/200/300"}
                alt="Filler text"
              />
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FeaturedPost;
