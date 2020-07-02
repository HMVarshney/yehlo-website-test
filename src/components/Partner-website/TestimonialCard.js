import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormatQuoteRoundedIcon from "@material-ui/icons/FormatQuoteRounded";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 175,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    margin: "auto",
  },
  align: {
    textAlign: "center",
  },
  iconContainer: {
    boxShadow: "0 0 8px black",
    backgroundColor: "white",
    borderRadius: "100%",
    padding: "3%",
    position: "absolute",
    top: "-32px",
  },
  quoteIcon: {
    height: "2em",
    width: "2em",
  },
});

export default function TestimonialCard(props) {
  const classes = useStyles();
  const { name, message } = props.review
    ? props.review
    : { name: "Raghav", message: "Had a shit time here" };
  return (
    <Card className={classes.root}>
      <div className={classes.iconContainer}>
        <FormatQuoteRoundedIcon className={classes.quoteIcon} />
      </div>
      <CardContent className={classes.card}>
        <Typography className={classes.pos} color="textSecondary">
          {message}
        </Typography>
        <Typography className={classes.align} variant="h5" component="h4">
          {"- "}{name}
        </Typography>
      </CardContent>
    </Card>
  );
}
