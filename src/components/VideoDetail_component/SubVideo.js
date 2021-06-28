import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import axios from "axios";

import styled from "styled-components";

const SubVideo = (props) => {
  const mainVideoId = props.mainVideoId;
  const setMainVideoId = props.setMainVideoId;
  const [subVideos, setSubVideo] = useState([]);

  useEffect(() => {
    axios
      .create({
        baseURL: "https://www.googleapis.com/youtube/v3/",
      })
      .get("/search", {
        params: {
          part: "snippet",
          regionCode: "kr",
          relatedToVideoId: mainVideoId,
          maxResults: 7, // 가져올 동영상 개수
          type: "video",
          key: process.env.REACT_APP_YOUTUBE_API_KEY, // api 키
        },
      })
      .then((results) => {
        const videos = results.data.items;
        console.log(videos);

        setSubVideo(videos);
      });
  }, []);

  const renderVideoList = subVideos.map((video, index) => {
    return (
      <SubVideoContainer key={index}>
        <img
          style={{ width: "150px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
          onMouseDown={() => setMainVideoId(video.id.videoId)}
        />
        <SubVideoExplainContainer>
          <VideoTitleText>{video.snippet.title}...</VideoTitleText>
          <Typography>{video.snippet.channelTitle}</Typography>
        </SubVideoExplainContainer>
      </SubVideoContainer>
    );
  });

  return <SubContainer>{renderVideoList}</SubContainer>;
};

const SubContainer = styled.section`
  width: 300px;
  padding: 1rem;
  @media (max-width: 960px) {
    display: none;
  }
`;

const SubVideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-bottom: 0.5rem;
`;

const SubVideoExplainContainer = styled.div`
  width: 150px;
  padding-left: 0.5rem;
`;

const VideoTitleText = styled.span`
  display: -webkit-flex;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 1rem;
  height: 3rem;
  line-height: 1.5rem;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;

  font-weight: bold;
  font-family: "NanumBarunGothic", sans-serif;
`;

export default SubVideo;
