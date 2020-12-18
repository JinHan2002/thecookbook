import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(3),
  },
  title: {
    marginTop: 30,
  },
}));

const Success = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography variant="h2" align="center">
        Succesfully Added
      </Typography>
      <Typography component="p" align="center" className={classes.title}>
        Congratulations! You've succesfully uploaded your own recipe!
      </Typography>
    </Box>
  );
};

export default Success;
