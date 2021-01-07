import React, { useState } from "react";
import { Paper, Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  video: {
    padding: theme.spacing(2),
  },
}));

const Video = (props) => {
  const videos = props.videos;
  console.log("videoMenu", videos);
  const onClickVideo = props.onClickVideo;

  const classes = useStyles();

  const renderVideoMenu = videos.map((video) => {
    return (
      <Grid item xs={3}>
        <div className={classes.video}>
          <img
            style={{ position: "relative", width: "100%", cursor: "pointer" }}
            alt="thumbnail"
            src={video.snippet.thumbnails.medium.url}
            onMouseDown={() => {
              if (typeof video.id === "object") {
                onClickVideo(video.id.videoId);
              } else {
                onClickVideo(video.id);
              }
            }}
          />
          <Typography style={{ textAlign: "center" }} variant="body1">
            {video.snippet.title}
          </Typography>
          <Typography
            style={{
              marginTop: "10px",
              textAlign: "right",
              fontWeight: "bold",
            }}
            variant="subtitle2"
          >
            {video.snippet.channelTitle}
          </Typography>
        </div>
      </Grid>
    );
  });

  return <React.Fragment>{renderVideoMenu}</React.Fragment>;
};

export default Video;
