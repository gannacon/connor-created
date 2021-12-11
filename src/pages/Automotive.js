import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import l1 from "./assets/automotive/l1.jpg";
import l2 from "./assets/automotive/l2.jpg";
import l3 from "./assets/automotive/l3.jpg";
import l4 from "./assets/automotive/l4.jpg";
import l5 from "./assets/automotive/l5.jpg";
import l6 from "./assets/automotive/l6.jpg";
import l7 from "./assets/automotive/l7.jpg";
import l8 from "./assets/automotive/l8.jpg";
import l9 from "./assets/automotive/l9.jpg";
import l10 from "./assets/automotive/l10.jpg";
import l11 from "./assets/automotive/l11.jpg";
import l12 from "./assets/automotive/l12.jpg";
import l13 from "./assets/automotive/l13.jpg";
import l14 from "./assets/automotive/l14.jpg";
import l15 from "./assets/automotive/l15.jpg";
import l16 from "./assets/automotive/l16.jpg";
import l17 from "./assets/automotive/l17.jpg";
import l18 from "./assets/automotive/l18.jpg";
// import l19 from "./assets/automotive/l19.jpg";
// import l20 from "./assets/automotive/l20.jpg";
// import l21 from "./assets/automotive/l21.jpg";
// import l22 from "./assets/automotive/l22.jpg";
// import l23 from "./assets/automotive/l23.jpg";
// import l24 from "./assets/automotive/l24.jpg";

export default function Lifestyle() {
  return (
    <Box sx={{ width: "90%", margin: "auto" }}>
      <Box sx={{ maxWidth: 800, margin: "auto" }}>
        <Divider>
          <Typography align="center" variant="h4">
            LIFESTYLE
          </Typography>
        </Divider>
      </Box>
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
    title: "CG AUTOMOTIVE",
  },
  {
    img: l2,
    title: "CG AUTOMOTIVE",
  },
  {
    img: l3,
    title: "CG AUTOMOTIVE",
  },
  {
    img: l4,
    title: "CG AUTOMOTIVE",
  },
  {
    img: l5,
    title: "CG AUTOMOTIVE",
  },
  {
    img: l6,
    title: "CG AUTOMOTIVE",
  },
  {
    img: l7,
    title: "CG AUTOMOTIVE",
  },
  {
    img: l8,
    title: "CG AUTOMOTIVE",
  },
  {
    img: l9,
    title: "CG AUTOMOTIVE",
  },
  {
    img: l10,
    title: "CG AUTOMOTIVE",
  },
  {
    img: l11,
    title: "CG AUTOMOTIVE",
  },
  {
    img: l12,
    title: "CG AUTOMOTIVE",
  },
  {
    img: l13,
    title: "CG AUTOMOTIVE",
  },
  {
    img: l14,
    title: "CG AUTOMOTIVE",
  },
  {
    img: l15,
    title: "CG AUTOMOTIVE",
  },
  {
    img: l16,
    title: "CG AUTOMOTIVE",
  },
  {
    img: l17,
    title: "CG AUTOMOTIVE",
  },
  {
    img: l18,
    title: "CG AUTOMOTIVE",
  },
];
