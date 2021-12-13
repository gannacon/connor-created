import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

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
      <Typography align="left" variant="h2">
        My Gear
      </Typography>
      <Divider />
      <Typography align="left" variant="h4" p="5px">
        Does gear really matter?
      </Typography>
      <br />
      <Typography align="left" variant="paragraph" pb="10px">
        Yes. It does. To be able to provide the best quality to my clients I
        stay up to date on the latest technology and trends. I invest heavily
        into my gear which allows me to produce faster and provide the best.
      </Typography>
      <br />
      <br />
      <br />
      <br />
      <ParallaxProvider>
        {" "}
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Parallax y={[20, -20]}>
              <Card flex="end" elevation="24">
                <CardMedia
                  component="img"
                  image={gear3}
                  elevation="24"
                  outline="none"
                ></CardMedia>
              </Card>
            </Parallax>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography align="left" variant="paragraph">
              This is my 2021 MacBook Pro. With the amount of photo editing I do
              I wanted speed, power, and a large screen. So naturally I had to
              go for the 16" with the i9. <br /> -Does it work? <br /> -Yes.{" "}
              <br />
              It's fast, bright, and never freezes. The trackpad is unmatched
              and multitasking is incredible. <br /> -Do I recommend it? <br />{" "}
              -No. <br />
              This is a screaming space heater. Just exporting from Adobe
              Lightroom starts the turbines. Working in laptop mode while
              developing on localhost my palms have to elevate to avoid third
              degree burns. I eagerly await an M1.
            </Typography>
          </Grid>
        </Grid>
      </ParallaxProvider>
    </Box>
  );
}

// const itemData = [
//   {
//     img: gear3,
//     title: "2021 MacBook Pro 16 i9",
//   },
//   {
//     img: gear4,
//     title: "iPad Pro 12.9in 3rd Gen",
//   },
//   {
//     img: gear1,
//     title: "Camera Body",
//     subtitle: "Sony A7iii",
//   },
//   {
//     img: gear2,
//     title: "Glass",
//     subtitle: "Sony 70-200mm F4, Sigma 35mm F1.4, Laowa 16mm F4",
//   },
// ];
