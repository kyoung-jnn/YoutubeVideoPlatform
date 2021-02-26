import React, { useState } from "react";
import { Paper, Typography, Grid, makeStyles, Avatar } from "@material-ui/core";

const Video = (props) => {
  const videos = props.videos.videos;
  const onClickVideo = props.onClickVideo;
  console.log(videos)

  const classes = useStyles();

  const renderVideoMenu = videos.map((video) => {
    return (
      <Grid item md={3} sm={4} xs={6}>
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
          <Grid container xs className={classes.videoText}>
            <Grid item xs={2}>
              <Avatar></Avatar>
            </Grid>
            <Grid item xs>
              <Grid>
                <Typography className={classes.videoTitleText}>
                  {video.snippet.title}
                </Typography>
              </Grid>
              <Grid style={{ marginTop: 10 }}>
                <Typography
                  style={{
                    textAlign: "left",
                  }}
                  variant="subtitle2"
                >
                  {video.snippet.channelTitle}
                </Typography>
                <Typography
                  style={{
                    textAlign: "left",
                  }}
                  variant="subtitle2"
                >
                  조회수 {video.statistics.viewCount}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
    );
  });

  return <React.Fragment>{renderVideoMenu}</React.Fragment>;
};

const useStyles = makeStyles((theme) => ({
  video: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
  },
  videoTitleText: {
    display: "-webkit-flex",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",

    fontSize: 14,
    height: "3em",
    lineHeight: 1.5,
    textAlign: "left",
    fontWeight: "bold",

    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  videoText: {},
}));

export default Video;
