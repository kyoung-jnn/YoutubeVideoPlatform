import React from "react";
import { Paper, Typography } from "@material-ui/core";
import YouTube from "react-youtube";

const Video = (props) => {
  const mainVideo = props.mainVideo
  console.log(mainVideo);
  const opts = {
    height: "200%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  if (mainVideo == null) return <div>Loading...</div>;
  else {
    return (
      <React.Fragment>
        <Paper elevation={3}>
          <YouTube videoId={mainVideo.id.videoId} opts={opts} onReady={_onReady} />
        </Paper>
        <Paper elevation={6} style={{ padding: "10px" }}>
          <Typography variant="h5">{mainVideo.snippet.title}</Typography>
          <Typography variant="subtitle1">{mainVideo.snippet.channelTitle}</Typography>
        </Paper>
      </React.Fragment>
    );
  }

  function _onReady(event) {
    event.target.pauseVideo();
  }
};

export default Video;
