import React, { useEffect, useState } from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";
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
          console.log(video);

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
      <React.Fragment>
        <CustomYoutube videoId={mainVideo.id} opts={opts} onReady={_onReady} />
        {/* <Paper
          elevation={6}
          style={{
            padding: "20px",
          }}
        >
          <div style={{ width: "100%" }}>
            <Typography style={{ fontWeight: "bold" }} variant="h5">
              {mainVideo.snippet.title}
            </Typography>
            <Typography className={classes.evaluationText} align="right">
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

            <Typography
              className={classes.nationText}
              color="secondary"
              variant="h5"
              align="right"
            >
              국가: {mainVideo.snippet.defaultAudioLanguage}
            </Typography>
          </div>
        </Paper> */}
      </React.Fragment>
    );
  }

  function _onReady(event) {
    event.target.pauseVideo();
  }
};

const CustomYoutube = styled(YouTube)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export default Video;
