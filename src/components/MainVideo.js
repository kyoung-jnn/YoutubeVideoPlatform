import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import axios from "axios";
import YouTube from "react-youtube";

const Video = (props) => {
  const mainVideoId = props.mainVideoId;
  const [mainVideo, setMainVideo] = useState(null);
  console.log("mainVideo", mainVideo);

  useEffect(() => {
    if (mainVideoId != null) {
      axios
        .create({
          baseURL: "https://www.googleapis.com/youtube/v3/",
        })
        .get("/videos", {
          params: {
            part: "snippet",
            id: String(mainVideoId),
            key: "AIzaSyAWgs3aZE3PyX2p0tL776GoBgMt3XNx71M", // api 키
          },
        })
        .then((result) => {
          console.log(result);
          const video = result.data.items[0];
          setMainVideo(video);
        });
    }
  },[]);
  
  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  if (mainVideo == null) return <div>Loading...</div>;
  else {
    return (
      <React.Fragment>
        <Paper elevation={3} style={{ position: "relative", display: "block" }}>
          <YouTube
            videoId={mainVideo.id.videoId}
            opts={opts}
            onReady={_onReady}
            style={{ position: "absolute", width: "100%" }}
          />
        </Paper>
        <Paper elevation={6} style={{ padding: "20px", fontWeight: "bold" }}>
          <Typography variant="h5">{mainVideo.snippet.title}</Typography>
          <Typography variant="subtitle">
            {mainVideo.snippet.channelTitle}
          </Typography>
        </Paper>
      </React.Fragment>
    );
  }

  function _onReady(event) {
    event.target.pauseVideo();
  }
};

export default Video;
