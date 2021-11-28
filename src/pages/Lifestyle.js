import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import l1 from "./assets/lifestyle/l1.jpg";
import l2 from "./assets/lifestyle/l2.jpg";
import l3 from "./assets/lifestyle/l3.jpg";
import l4 from "./assets/lifestyle/l4.jpg";
import l5 from "./assets/lifestyle/l5.jpg";
import l6 from "./assets/lifestyle/l6.jpg";
import l7 from "./assets/lifestyle/l7.jpg";
import l8 from "./assets/lifestyle/l8.jpg";
import l9 from "./assets/lifestyle/l9.jpg";
import l10 from "./assets/lifestyle/l10.jpg";
import l11 from "./assets/lifestyle/l11.jpg";
import l12 from "./assets/lifestyle/l12.jpg";
import l13 from "./assets/lifestyle/l13.jpg";
import l14 from "./assets/lifestyle/l14.jpg";
import l15 from "./assets/lifestyle/l15.jpg";
import l16 from "./assets/lifestyle/l16.jpg";
import l17 from "./assets/lifestyle/l17.jpg";
import l18 from "./assets/lifestyle/l18.jpg";
import l19 from "./assets/lifestyle/l19.jpg";
import l20 from "./assets/lifestyle/l20.jpg";
import l21 from "./assets/lifestyle/l21.jpg";
import l22 from "./assets/lifestyle/l22.jpg";

export default function Lifestyle() {
  return (
    <Box sx={{ maxWidth: 1080, margin: "auto" }}>
      <Typography margin="auto" variant="h5">
        lifestyle
      </Typography>
      <ImageList variant="masonry" cols={2} gap={8}>
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
    img: l1,
    title: "Colton & Natalie",
  },
  {
    img: l2,
    title: "Colton & Natalie",
  },
  {
    img: l3,
    title: "Colton & Natalie",
  },
  {
    img: l4,
    title: "Colton & Natalie",
  },
  {
    img: l5,
    title: "Colton & Natalie",
  },
  {
    img: l6,
    title: "Colton & Natalie",
  },
  {
    img: l7,
    title: "Colton & Natalie",
  },
  {
    img: l8,
    title: "Colton & Natalie",
  },
  {
    img: l9,
    title: "Colton & Natalie",
  },
  {
    img: l10,
    title: "Colton & Natalie",
  },
  {
    img: l11,
    title: "Colton & Natalie",
  },
  {
    img: l12,
    title: "Colton & Natalie",
  },
  {
    img: l13,
    title: "Colton & Natalie",
  },
  {
    img: l14,
    title: "Colton & Natalie",
  },
  {
    img: l15,
    title: "Colton & Natalie",
  },
  {
    img: l16,
    title: "Colton & Natalie",
  },
  {
    img: l17,
    title: "Colton & Natalie",
  },
  {
    img: l18,
    title: "Colton & Natalie",
  },
  {
    img: l19,
    title: "Colton & Natalie",
  },
  {
    img: l20,
    title: "Colton & Natalie",
  },
  {
    img: l21,
    title: "Colton & Natalie",
  },
  {
    img: l22,
    title: "Colton & Natalie",
  },
];
