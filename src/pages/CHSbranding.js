import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import p1 from "./assets/images/CHS BRANDING/CHS1.png";
import p2 from "./assets/images/CHS BRANDING/CHS2.png";
import p3 from "./assets/images/CHS BRANDING/CHS3.png";
import p4 from "./assets/images/CHS BRANDING/CHS4.png";

export default function CHSbranding() {
  return (
    <Box sx={{ width: "90%", maxWidth: "1080px", margin: "auto" }}>
      <Box sx={{ maxWidth: 800, margin: "auto" }}>
        <Divider>
          <Typography align="center" variant="h4">
            Curtis Home Solutions
          </Typography>
        </Divider>
      </Box>
      <Box sx={{ maxWidth: 800, margin: "auto" }}>
        <Typography align="center" variant="h5">
          For my client "Curtis Home Solutions" I provided a full business
          startup package. This includes logo and branding creation shown below:
        </Typography>
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
    img: p1,
    title: "chs branding",
  },
  {
    img: p2,
    title: "chs branding",
  },

  {
    img: p3,
    title: "chs branding",
  },
  {
    img: p4,
    title: "chs branding",
  },
];
