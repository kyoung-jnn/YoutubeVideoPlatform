import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import axios from "axios";
import MainVideo from "./MainVideo.js";
import SubVideo from "./SubVideo.js";

const useStyles = makeStyles((theme) => ({
  App: { justifyContent: "center" },
}));

function App() {
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

    console.log(currentVideo);

    axios
      .create({
        baseURL: "https://www.googleapis.com/youtube/v3/",
      })
      .get("videos", {
        params: {
          part: "snippet,contentDetails,recordingDetails",
          key: "AIzaSyA_6zSz_6DWbstFSBOs_4gncohnIsdAoXk", // api 키
          id: currentVideo.id.videoId,
        },
      })
      .then((results) => {
        console.log(results);
      });
  };

  return (
    <React.Fragment>
      <Grid item xs={6}>
        <MainVideo mainVideo={currentVideo}></MainVideo>
      </Grid>
      <Grid item xs={3}>
        <SubVideo subVideos={videos} setMainVideo={setCurrentVideo}></SubVideo>
      </Grid>
    </React.Fragment>
  );
}

export default App;
