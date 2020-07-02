import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DropdownMenu from "./DropdownMenu";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: 1350,
  },
  toolbar: {
    backgroundColor: "#11110e",
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  button: {
    textTransform: "none",
  },
});

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            {props.brand ? props.brand : "Aibaan Pg"}
          </Typography>
          <div className="normal-nav">
            <a href="#partner-about-section">
              <Button className={classes.button} color="inherit">
                <Typography>About</Typography>
              </Button>
            </a>
            <a href="#partner-testimonial-section">
              <Button className={classes.button} color="inherit">
                <Typography>Testimonials</Typography>
              </Button>
            </a>
            <a href="#partner-location-section">
              <Button className={classes.button} color="inherit">
                <Typography>Location</Typography>
              </Button>
            </a>
            <a href="#partner-contact-section">
              <Button className={classes.button} color="inherit">
                <Typography>Contact us</Typography>
              </Button>
            </a>
          </div>
          <div className="responsive-overflow-nav">
            <DropdownMenu />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
