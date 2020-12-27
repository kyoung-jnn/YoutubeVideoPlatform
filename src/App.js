import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import SearchBar from "./components/SearchBar.js";
import VideoDetail from "./components/VideoDetail.js";
import VideoMenu from "./components/VideoMenu.js";

const useStyles = makeStyles((theme) => ({
  App: { justifyContent: "center" },
}));

function App(props) {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleSubmit = async (searchKeyword) => {
    axios
      .create({
        baseURL: "https://www.googleapis.com/youtube/v3/",
      })
      .get("/search", {
        params: {
          part: "snippet",
          maxResults: 5, // 가져올 동영상 개수
          key: "AIzaSyA_6zSz_6DWbstFSBOs_4gncohnIsdAoXk", // api 키
          q: searchKeyword,
        },
      })
      .then((results) => {
        const list = results.data.items;

        setVideos(list);
        setCurrentVideo(list[0]);
      });

    this.props.history.push("/videoDetail");
  };

  return (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={3} style={{ justifyContent: "center" }}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit}></SearchBar>
          </Grid>
          <Switch>
            <Route path="/" component={VideoMenu} exact={true}></Route>
            <Route
              path="/videoDetail"
              component={VideoDetail}
              exact={true}
            ></Route>
          </Switch>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
