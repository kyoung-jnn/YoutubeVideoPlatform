import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import YouTube from "react-youtube";

const SubVideo = (props) => {
  const subVideos = props.subVideos;
  const setMainVideo = props.setMainVideo;

  const renderVideoList = subVideos.map((video) => {
    return (
      <Grid>
        <Paper style={{ cursor: "pointer" }}>
          <img
            style={{ width: "100%" }}
            alt="thumbnail"
            src={video.snippet.thumbnails.medium.url}
            onMouseDown={() => setMainVideo(video)}
          />
        </Paper>
        <Paper style={{ padding: "10px", marginBottom: "20px" }}>
          <Typography variant="h5" style={{fontSize:'6px'}}>{video.snippet.title}</Typography>
        </Paper>
      </Grid>
    );
  });

  return <Grid container>{renderVideoList}</Grid>;
};

export default SubVideo;
