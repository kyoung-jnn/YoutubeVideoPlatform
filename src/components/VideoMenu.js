import React from "react";
import { Paper, Typography } from "@material-ui/core";
import YouTube from "react-youtube";

const Video = (props) => {
  const mainVideo = props.mainVideo;

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
        <Paper elevation={6} style={{ padding: "20px", fontWeight:'bold' }}>
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
