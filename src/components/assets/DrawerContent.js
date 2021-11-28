import * as React from "react";
import { styled } from "@mui/material/styles";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={100} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <List>
        <ListItemLink href="/#/">
          <ListItemText primary="Home" />
        </ListItemLink>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <ListItemText primary="Web Development" />
          </AccordionSummary>
          <AccordionDetails>
            <ListItemLink href="/#/projects">
              <ListItemText primary="Projects" />
            </ListItemLink>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <ListItemText primary="Photography" />
          </AccordionSummary>
          <AccordionDetails>
            <ListItemLink href="/#/lifestyle">
              <ListItemText primary="Lifestyle" />
            </ListItemLink>
            <ListItemLink href="/#/people">
              <ListItemText primary="People" />
            </ListItemLink>
            <ListItemLink href="/#/commercial">
              <ListItemText primary="Commercial" />
            </ListItemLink>
          </AccordionDetails>
        </Accordion>
        <ListItemLink href="/#/contact">
          <ListItemText primary="Contact Me" />
        </ListItemLink>
      </List>
    </div>
  );
}
