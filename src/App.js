import * as React from "react";

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Gallery from "./components/pages/Gallery";
import Home from "./components/pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { orange } from "@mui/material/colors";
import { StayPrimaryLandscape } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FAFAFA",
    },
    secondary: {
      main: "#84FFFF",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

function display() {
  return (
    <>
      {/* <Button variant="contained">Hello World</Button> */}
      <Nav />
      <Routes>
        <Route exact path="gallery" element={<Gallery />} />
        {/* <Route exact path="footer" element={<Footer />} /> */}
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>{display()}</ThemeProvider>
      </Router>
    </>
  );
}

export default App;
