import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import CHSLogo from "../assets/images/CHSLOGO.jpg";
import pbm from "../assets/images/pbm.jpg";
import pbmlogo from "../assets/images/pbmlogo.png";
import KPAHistoric from "../assets/images/historicdepot.jpg";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

function FeaturedPost() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        position: "relative",
        p: { xs: 3, md: 9 },
      }}
    >
      <Box margin="auto" sx={{ maxWidth: "1080px" }}>
        <Typography
          component="h1"
          variant="h4"
          color="inherit"
          gutterBottom
          pb="10px"
        >
          Here are some of my most recent development projects:
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card elevation="24" sx={{ maxWidth: 345, margin: "auto" }}>
              <CardActionArea
                target="_blank"
                href="https://www.curtishomesolutions.com/"
              >
                <CardMedia
                  component="img"
                  width="140"
                  image={CHSLogo}
                  alt="CHS Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Curtis Home Solutions
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    New business startup. Website, CRM, Email, Invoicing, Brand
                    and Logo Design.
                  </Typography>
                  <Typography variant="subtitle1" color="Inherit">
                    Tap to see the final product
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation="24" sx={{ maxWidth: 345, margin: "auto" }}>
              <CardActionArea
                target="_blank"
                href="https://www.photosbymalaina.com/"
              >
                <CardMedia
                  component="img"
                  width="140"
                  image={pbmlogo}
                  alt="Malaina Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Photos by Malaina
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Photography Portfolio. Website, Email, Logo Design.
                  </Typography>
                  <Typography variant="subtitle1" color="Inherit">
                    Tap to see the final product
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation="24" sx={{ maxWidth: 345, margin: "auto" }}>
              <CardActionArea
                target="_blank"
                href="https://kansaspreservationalliance.org/"
              >
                <CardMedia
                  component="img"
                  width="140"
                  image={KPAHistoric}
                  alt="KPA Historic Depot"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Kansas Preservation Alliance{" "}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Website redesign. Email.
                  </Typography>
                  <Typography variant="subtitle1" color="Inherit">
                    Tap to see the final product
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default FeaturedPost;
