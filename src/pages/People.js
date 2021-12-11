import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import p1 from "./assets/people/p1.jpg";
import p2 from "./assets/people/p2.jpg";
import p3 from "./assets/people/p3.jpg";
import p4 from "./assets/people/p4.jpg";
import p5 from "./assets/people/p5.jpg";
import p6 from "./assets/people/p6.jpg";
import p7 from "./assets/people/p7.jpg";
import p8 from "./assets/people/p8.jpg";
import p9 from "./assets/people/p9.jpg";
import p10 from "./assets/people/p10.jpg";
import p11 from "./assets/people/p11.jpg";
import p12 from "./assets/people/p12.jpg";
import p13 from "./assets/people/p13.jpg";
import p14 from "./assets/people/p14.jpg";
import p15 from "./assets/people/p15.jpg";
import p16 from "./assets/people/p16.jpg";
import p17 from "./assets/people/p17.jpg";
import p18 from "./assets/people/p18.jpg";
import p19 from "./assets/people/p19.jpg";
import p20 from "./assets/people/p20.jpg";
import p21 from "./assets/people/p21.jpg";

export default function People() {
  return (
    <Box sx={{ maxWidth: "90%", margin: "auto" }}>
      <Box sx={{ maxWidth: 800, margin: "auto" }}>
        <Divider>
          <Typography align="center" variant="h4">
            PEOPLE
          </Typography>
        </Divider>
      </Box>

      <ImageList variant="masonry" cols={1}>
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
    img: p1,
    title: "Rob",
  },
  {
    img: p2,
    title: "Ashley",
  },
  {
    img: p3,
    title: "Connor",
  },
  {
    img: p4,
    title: "Rob",
  },
  {
    img: p5,
    title: "Rob",
  },
  {
    img: p6,
    title: "Green Family",
  },
  {
    img: p7,
    title: "Jack Jack",
  },
  {
    img: p8,
    title: "Alyce",
  },
  {
    img: p9,
    title: "Troy",
  },
  {
    img: p10,
    title: "Jane & Ava",
  },
  {
    img: p11,
    title: "Bill & Tina",
  },
  {
    img: p12,
    title: "Colton & Natalie",
  },
  {
    img: p13,
    title: "Colton & Natalie",
  },
  {
    img: p14,
    title: "Connor & Ashley",
  },
  {
    img: p15,
    title: "Malaina",
  },
  {
    img: p16,
    title: "Malaina",
  },
  {
    img: p17,
    title: "Ashley",
  },
  {
    img: p18,
    title: "Ashley",
  },
  {
    img: p19,
    title: "Ashley",
  },
  {
    img: p20,
    title: "Ashley",
  },
  {
    img: p21,
    title: "Ashley",
  },
];
