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
// import p5 from "./assets/people/p5.jpg";
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

export default function People() {
  return (
    <Box sx={{ maxWidth: 1080, margin: "auto" }}>
      <Box sx={{ maxWidth: 800, margin: "auto" }}>
        <Typography align="center" variant="h4">
          people
        </Typography>

        <Divider>
          <Typography align="center" variant="h6">
            peo &#8226; ple
          </Typography>
        </Divider>
        <Typography align="center" variant="h6" width="500" ml="10px" mr="10px">
          a body of persons that are united by a common culture, tradition, or
          sense of kinship
        </Typography>
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
    img: p16,
    title: "Malaina",
  },
  {
    img: p15,
    title: "Malaina",
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
    img: p14,
    title: "Connor & Ashley",
  },
];
