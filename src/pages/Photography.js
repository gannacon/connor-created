import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import l19 from "./assets/lifestyle/l19.jpg";
import p8 from "./assets/commercial/p8.jpg";
import p16 from "./assets/people/p16.jpg";

// const images = [
//   {
//     img: l19,
//     title: "Lifestyle",
//     width: "100%",
//   },
//   {
//     url: "/static/images/buttons/burgers.jpg",
//     title: "People",
//     width: "100%",
//   },
//   {
//     url: "/static/images/buttons/camera.jpg",
//     title: "Commercial",
//     width: "100%",
//   },
// ];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.05,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.2,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Photography() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "90%",
        margin: "auto",
      }}
    >
      <ImageButton
        focusRipple
        style={{ height: "450px", width: "100%" }}
        href="/#/commercial"
      >
        <ImageSrc style={{ backgroundImage: `url(${p8})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Typography
            component="span"
            variant="h5"
            color="inherit"
            sx={{
              position: "relative",
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            Commercial
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </Image>
      </ImageButton>
      <ImageButton
        focusRipple
        style={{ height: "450px", width: "100%" }}
        href="/#/lifestyle"
      >
        <ImageSrc style={{ backgroundImage: `url(${l19})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Typography
            component="span"
            variant="h5"
            color="inherit"
            sx={{
              position: "relative",
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            Lifestyle
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </Image>
      </ImageButton>

      <ImageButton
        focusRipple
        style={{ height: "450px", width: "100%" }}
        href="/#/people"
      >
        <ImageSrc style={{ backgroundImage: `url(${p16})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Typography
            component="span"
            variant="h5"
            color="inherit"
            sx={{
              position: "relative",
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            People
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </Image>
      </ImageButton>
    </Box>
  );
}
