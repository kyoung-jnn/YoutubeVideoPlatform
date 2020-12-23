import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import axios from "axios";
import SearchBar from "./components/SearchBar.js";
import MainVideo from "./components/MainVideo.js";
import SubVideo from "./components/SubVideo.js";

const useStyles = makeStyles((theme) => ({
  App: { justifyContent: "center" },
}));

function App() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  const classes = useStyles();

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
  };

  return (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={3} style={{ justifyContent: "center" }}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit}></SearchBar>
          </Grid>
          <Grid item xs={6}>
            <MainVideo mainVideo={currentVideo}></MainVideo>
          </Grid>
          <Grid item xs={3}>
            <SubVideo subVideos={videos}></SubVideo>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
