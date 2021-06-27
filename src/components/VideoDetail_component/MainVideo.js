import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import axios from "axios";
import YouTube from "react-youtube";

import styled from "styled-components";

const Video = (props) => {
  const [mainVideo, setMainVideo] = useState(null);

  useEffect(() => {
    if (props.mainVideoId != null) {
      axios
        .create({
          baseURL: "https://www.googleapis.com/youtube/v3/",
        })
        .get("/videos", {
          params: {
            part: "snippet,statistics,recordingDetails",
            id: props.mainVideoId,
            key: process.env.REACT_APP_YOUTUBE_API_KEY, // api 키
          },
        })
        .then((result) => {
          const video = result.data.items[0];
          setMainVideo(video);
        });
    }
  }, [props.mainVideoId]);

  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  if (mainVideo == null) return <div>⏳...</div>;
  else {
    return (
      <MainContainer>
        <VideoContainer>
          <CustomYoutube
            videoId={mainVideo.id}
            opts={opts}
            onReady={_onReady}
          />
        </VideoContainer>
        <VideoExplainContainer elevation={6}>
          <Typography style={{ fontWeight: "bold" }} variant="h5">
            {mainVideo.snippet.title}
          </Typography>
          <Typography align="right">
            👍 {mainVideo.statistics.likeCount} 👎{" "}
            {mainVideo.statistics.dislikeCount}
          </Typography>
          <Typography style={{ fontWeight: "bold" }} variant="h6">
            {mainVideo.snippet.channelTitle}
          </Typography>
          <Typography>
            조회수 {mainVideo.statistics.viewCount}회 | 게시일{" "}
            {mainVideo.snippet.publishedAt.split("-")[0] +
              mainVideo.snippet.publishedAt.split("-")[1] +
              mainVideo.snippet.publishedAt.split("-")[2].split("T")[0]}
          </Typography>
        </VideoExplainContainer>
      </MainContainer>
    );
  }

  function _onReady(event) {
    event.target.pauseVideo();
  }
};

const MainContainer = styled.section`
  @media (min-width: 960px) {
    width: 960px;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  margin: 1rem;
`;

const CustomYoutube = styled(YouTube)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const VideoExplainContainer = styled(Paper)`
  margin: 1rem;
  padding: 0.7rem;
`;


export default Video;
