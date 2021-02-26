import React, { useEffect, useState } from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import axios from "axios";

const SubVideo = (props) => {
  const setMainVideoId = props.setMainVideoId;
  const [subVideos, setSubVideo] = useState([]);

  useEffect(() => {
    axios
      .create({
        baseURL: "https://www.googleapis.com/youtube/v3/",
      })
      .get("/videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          videoCategoryId: 24,
          regionCode: "kr",
          key: process.env.REACT_APP_YOUTUBE_API_KEY, // api 키
        },
      })
      .then((results) => {
        const videos = results.data.items
        setSubVideo(videos);
      });
  },[]);

  const renderVideoList = subVideos.map((video) => {
    return (
      <Grid>
        <Paper style={{ cursor: "pointer" }}>
          <img
            style={{ width: "100%" }}
            alt="thumbnail"
            src={video.snippet.thumbnails.medium.url}
            onMouseDown={() => setMainVideoId(video.id)}
          />
        </Paper>
        <Paper style={{ padding: "5px", marginBottom: "20px" }}>
          <Typography variant="caption" style={{ fontWeight:'bold' }}>
            {video.snippet.title}
          </Typography>
        </Paper>
      </Grid>
    );
  });

  return <Grid container>{renderVideoList}</Grid>;
};

export default SubVideo;
