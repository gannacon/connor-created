import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import gear1 from "./assets/images/gear1.jpg";
import gear2 from "./assets/images/gear2.jpg";
import gear3 from "./assets/images/gear3.jpg";
import gear4 from "./assets/images/gear4.jpg";
// import gear5 from "./assets/images/gear5.jpg";
import Paper from "@mui/material/Paper";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const Image = {
  component: "img",
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function TitlebarBelowImageList() {
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1080px",
        margin: "auto",
      }}
    >
      <Box sx={{ maxWidth: 800, margin: "auto" }}>
        <Typography align="left" variant="h2">
          My Gear
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography align="right" variant="h5">
            Does gear really matter?
          </Typography>{" "}
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation="24">
            <CardMedia
              component="img"
              image={gear1}
              elevation="24"
              outline="none"
            ></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

const itemData = [
  {
    img: gear3,
    title: "2021 MacBook Pro 16 i9",
  },
  {
    img: gear4,
    title: "iPad Pro 12.9in 3rd Gen",
  },
  {
    img: gear1,
    title: "Camera Body",
    subtitle: "Sony A7iii",
  },
  {
    img: gear2,
    title: "Glass",
    subtitle: "Sony 70-200mm F4, Sigma 35mm F1.4, Laowa 16mm F4",
  },
];
