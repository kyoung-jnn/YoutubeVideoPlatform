import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import axios from "axios";
import MainVideo from "./MainVideo.js";
import SubVideo from "./SubVideo.js";

const useStyles = makeStyles((theme) => ({
  App: { justifyContent: "center" },
}));

function VideoDetail(props) {
  console.log(props);

  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

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

export default VideoDetail;
