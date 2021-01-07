import React, { useState } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  fade,
  IconButton,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  navi: {
    display:"flex",
    justifyContent: "space-between",
    width: "auto%",
    position: "relative",
    backgroundColor: "red",
  },
  title: {
    display: "block",
  },
  search: {
    position: "relative",
    borderRadius: 10,
    width: "40%",
    marginLeft: 0,
    backgroundColor: fade("#fff", 0.2),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.35),
    },
  },
  searchIcon: {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    padding: theme.spacing(0, 2),
  },
  searchInput: {
    width: "100%",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: "50px",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  root: {
    padding: theme.spacing(3),
  },
}));

export default (props) => {
  const [searchVideo, setSearchVideo] = useState();

  const handleChange = (event) => {
    setSearchVideo(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      props.onSubmit(searchVideo);
    }
  };

  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.navi}>
        <IconButton edge="start">
          <MenuIcon></MenuIcon>
        </IconButton>
     
        <div className={classes.search}>
          <SearchIcon className={classes.searchIcon}></SearchIcon>
          <InputBase
            className={classes.searchInput}
            placeholder="검색..."
            onChange={handleChange}
            onKeyPress={handleSearch}
          ></InputBase>
        </div>
        <Typography className={classes.title} variant="h6">
          Video Platform 🎬
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
