import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MainBanner from "./components/MainBanner";
import RecentPosts from "./components/RecentPosts";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import CSSLogo from "./assets/devlogos/css.png";
import GITHUB from "./assets/devlogos/GITHUB.png";
import GRAPHQL from "./assets/devlogos/graphql.png";
import ImageListItem from "@mui/material/ImageListItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function Home() {
  const slider = (
    <AwesomeSlider bullets={false} organicArrows={true}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            width="100px"
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </AwesomeSlider>
  );
  return (
    <>
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Typography mb="25px" variant="h3">
          Are you in need of a Web Developer?
        </Typography>
        <Typography variant="h4">I believe I can help.</Typography>
        <Box sx={{ m: "5px" }}>
          <Typography variant="subtitle">
            I recently completed a 6 month course building websites, web apps,
            databases, and so much more. My github portfolio showcases all the
            projects and homeworks I completed in that time.
          </Typography>
        </Box>

        <Button
          href="https://github.com/gannacon"
          target="blank"
          sx={{ m: "10px" }}
          variant="contained"
          size="large"
        >
          GitHub
        </Button>
        <Box sx={{ margin: "auto" }}>
          {slider}
          <br />
          <Box align="center" sx={{ align: "center", margin: "auto" }}>
            <Typography align="center" variant="h5">
              Swipe
              <br />
              <ArrowForwardIosIcon />{" "}
            </Typography>

            <br />
          </Box>
        </Box>
        {/* <Button
          href="https://www.gannaway.org/"
          target="blank"
          sx={{ m: "10px" }}
          variant="contained"
          size="large"
        >
          Let's get to work
        </Button> */}
      </Box>
      <RecentPosts />
    </>
  );
}

const itemData = [
  {
    img: CSSLogo,
    title: "CG PEOPLE",
  },
  {
    img: GRAPHQL,
    title: "CG PEOPLE",
  },
  {
    img: GITHUB,
    title: "CG PEOPLE",
  },
];
