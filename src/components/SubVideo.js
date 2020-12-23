import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import YouTube from "react-youtube";

const SubVideo = (props) => {
  const subVideos = props.subVideos;

  const renderVideoList = subVideos.map((video) => {
    return (
      <Grid>
        <Paper style={{ cursor: "pointer", marginBottom:'20px'}}>
          <img
            style={{ width: "100%" }}
            alt="thumbnail"
            src={video.snippet.thumbnails.medium.url}
          />
          <Typography variant="subtitle">{video.snippet.title}</Typography>
        </Paper>
      </Grid>
    );
  });

  return <Grid container>{renderVideoList}</Grid>;
};

export default SubVideo;
