import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import Banner from "../assets/images/banner.jpg";
import p3 from "../assets/people/p3.jpg";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function MainFeaturedPost(props) {
  const theme = useTheme();

  return (
    <ParallaxProvider>
      <div scrollAxis="vertical">
        <Parallax y={[20, -30]}>
          <Box
            sx={{
              position: "relative",
              backgroundColor: "grey.800",
              color: "#fff",
              mt: 5,

              dropShadow: "none",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${p3})`,
              [theme.breakpoints.up("md")]: {
                backgroundImage: `url(${Banner})`,
              },
              height: "500px",
            }}
          >
            {/* Increase the priority of the hero background image */}
            {/* {<img style={{ display: "none" }} src={p3} alt="KC skyline" />} */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,.05)",
              }}
            />
            <Grid container>
              <Grid item md={6}>
                <Box
                  sx={{
                    position: "relative",
                    p: { xs: 3, md: 6 },
                    pr: { md: 0 },
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Welcome to my creative space
                  </Typography>
                  {/* <Typography variant="h5" color="inherit" paragraph>
              Here is where I will showcase my web development and photography
              projects. This was website was coded by me using React.
            </Typography> */}
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Typography variant="subtitle">
            Checkout this site's{" "}
            <Link
              variant="subtitle"
              color="inherit"
              href="https://github.com/gannacon/connor-created"
              target="_blanks"
            >
              repo.
            </Link>
          </Typography>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default MainFeaturedPost;
