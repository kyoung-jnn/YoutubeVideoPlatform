import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import axios from "axios";
import YouTube from "react-youtube";

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
            key: "AIzaSyAWgs3aZE3PyX2p0tL776GoBgMt3XNx71M", // api 키
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
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  if (mainVideo == null) return <div>⏳...</div>;
  else {
    return (
      <React.Fragment>
        <div>
          <YouTube
            videoId={mainVideo.id}
            opts={opts}
            onReady={_onReady}
            style={{ position: "relative" }}
          />
        </div>
        <Paper elevation={6} style={{ padding: "20px", display: "flex" }}>
          <div style={{ width: "50%" }}>
            <Typography variant="h5">{mainVideo.snippet.title}</Typography>
            <Typography>{mainVideo.snippet.channelTitle}</Typography>
            <Typography>
              조회수 {mainVideo.statistics.viewCount}회 /{" "}
              {mainVideo.snippet.publishedAt.split("-")[0] +
                mainVideo.snippet.publishedAt.split("-")[1] +
                mainVideo.snippet.publishedAt.split("-")[2].split("T")[0]}
            </Typography>

            <Typography>
              국가: {mainVideo.snippet.defaultAudioLanguage}
            </Typography>
          </div>
          <div style={{ width: "50%" }}>
            <Typography>👍</Typography>
            <Typography>👎</Typography>
          </div>
        </Paper>
      </React.Fragment>
    );
  }

  function _onReady(event) {
    event.target.pauseVideo();
  }
};

export default Video;
