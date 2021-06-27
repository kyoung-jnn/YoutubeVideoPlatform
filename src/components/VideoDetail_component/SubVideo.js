import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import axios from "axios";

import styled from "styled-components";

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
        const videos = results.data.items;
        setSubVideo(videos);
      });
  }, []);

  const renderVideoList = subVideos.map((video) => {
    return (
      <Paper style={{ cursor: "pointer" }}>
        <img
          style={{ width: "100%" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
          onMouseDown={() => setMainVideoId(video.id)}
        />

        <Typography variant="caption" style={{ fontWeight: "bold" }}>
          {video.snippet.title}
        </Typography>
      </Paper>
    );
  });

  return <SubContainer>{renderVideoList}</SubContainer>;
};

const SubContainer = styled.section`
  width: 200px;
  @media (max-width: 960px) {
    display: none;
  }
`;

export default SubVideo;
