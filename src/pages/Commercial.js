import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import p1 from "./assets/commercial/p1.jpg";
import p2 from "./assets/commercial/p2.jpg";
import p3 from "./assets/commercial/p3.jpg";
import p4 from "./assets/commercial/p4.jpg";
import p5 from "./assets/commercial/p5.jpg";
import p6 from "./assets/commercial/p6.jpg";
import p7 from "./assets/commercial/p7.jpg";
import p8 from "./assets/commercial/p8.jpg";
import p9 from "./assets/commercial/p9.jpg";
import p10 from "./assets/commercial/p10.jpg";
import p11 from "./assets/commercial/p11.jpg";
import p12 from "./assets/commercial/p12.jpg";
import p13 from "./assets/commercial/p13.jpg";
import p14 from "./assets/commercial/p14.jpg";
import p15 from "./assets/commercial/p15.jpg";
import p16 from "./assets/commercial/p16.jpg";
import p17 from "./assets/commercial/p17.jpg";
import p18 from "./assets/commercial/p18.jpg";
import p19 from "./assets/commercial/p19.jpg";
import p20 from "./assets/commercial/p20.jpg";
import p21 from "./assets/commercial/p21.jpg";
import p22 from "./assets/commercial/p22.jpg";
import p23 from "./assets/commercial/p23.jpg";
import p24 from "./assets/commercial/p24.jpg";
import p25 from "./assets/commercial/p25.jpg";
import p26 from "./assets/commercial/p26.jpg";
import p27 from "./assets/commercial/p27.jpg";

export default function Commercial() {
  return (
    <Box sx={{ maxWidth: "90%", margin: "auto" }}>
      <Box sx={{ maxWidth: 800, margin: "auto" }}>
        <Divider>
          <Typography align="center" variant="h4">
            COMMERCIAL
          </Typography>
        </Divider>
      </Box>
      <ImageList variant="masonry" cols={1} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: p27,
    title: "Experience Center Living Room",
  },
  {
    img: p20,
    title: "Experience Center Main Stair",
  },
  {
    img: p21,
    title: "Experience Center Louis Bedroom",
  },
  {
    img: p23,
    title: "Experience Center Louis Bedroom",
  },
  {
    img: p22,
    title: "Experience Center Rooftop Bar",
  },

  {
    img: p24,
    title: "Experience Center Living Room",
  },
  {
    img: p25,
    title: "Experience Center Patio",
  },
  {
    img: p26,
    title: "Experience Center Living Room",
  },

  {
    img: p1,
    title: "Farm House",
  },

  {
    img: p3,
    title: "Barn",
  },
  {
    img: p4,
    title: "Barn",
  },
  {
    img: p5,
    title: "Farm House",
  },
  {
    img: p8,
    title: "Unruh House",
  },
  {
    img: p6,
    title: "Unruh Backyard",
  },
  {
    img: p7,
    title: "Unruh Backyard",
  },

  {
    img: p9,
    title: "Unruh Front",
  },
  {
    img: p10,
    title: "Unruh interior",
  },
  {
    img: p11,
    title: "Unruh interior",
  },
  {
    img: p12,
    title: "Unruh Interior",
  },
  {
    img: p13,
    title: "Unruh Interior",
  },
  {
    img: p14,
    title: "Unruh Interior",
  },
  {
    img: p15,
    title: "McNiel House",
  },
  {
    img: p16,
    title: "McNiel Interior",
  },
  {
    img: p17,
    title: "McNiel Interior",
  },
  {
    img: p18,
    title: "McNiel Interior",
  },
  {
    img: p19,
    title: "McNiel Interior",
  },
];
