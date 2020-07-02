import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
const useStyles = makeStyles({
  fullList: {
    width: "auto",
  },
  expand: {
    color: "white",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const linkId = [
    "#partner-about-section",
    "#partner-testimonial-section",
    "#partner-location-section",
    "#partner-contact-section",
  ];

  const list = (anchor) => (
    <div
      className={clsx(classes.list, classes.fullList)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["About", "Testimonials", "Location", "Contact us"].map(
          (text, index) => (
            <a href={linkId[index]} key={text}>
              <ListItem button>
                <ListItemText primary={text} />
              </ListItem>
            </a>
          )
        )}
      </List>
    </div>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, !state.top)}>
            <MenuRoundedIcon className={classes.expand} />
          </IconButton>
          <Drawer
            className="partner-web-nav"
            style={{ marginTop: "56px" }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
