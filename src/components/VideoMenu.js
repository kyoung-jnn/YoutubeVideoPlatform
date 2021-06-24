import React, { Fragment } from "react";
import { Typography, Grid, Avatar } from "@material-ui/core";
import styled from "styled-components";

const VideoMenu = (props) => {
  const videos = props.videos;
  const channels = props.channels;

  const onClickVideo = props.onClickVideo;

  const renderVideoMenu = videos.map((video, index) => {
    return (
      <VideoContainer item md={3} sm={4} xs={6}>
        <VideoThumbnail
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
          onMouseDown={() => {
            if (typeof video.id === "object") {
              onClickVideo(video.id.videoId);
            } else {
              onClickVideo(video.id);
            }
          }}
        ></VideoThumbnail>
        <VideoTextContainer container>
          <VideoLeftContainer>
            <Avatar
              src={channels[index].data.items[0].snippet.thumbnails.medium.url}
            ></Avatar>
          </VideoLeftContainer>
          <VideoRightContainer>
            <Grid>
              <VideoTitleText>{video.snippet.title}</VideoTitleText>
            </Grid>
            <Grid>
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
          </VideoRightContainer>
        </VideoTextContainer>
      </VideoContainer>
    );
  });

  return (
    <React.Fragment>
      {videos.length != 0 ? renderVideoMenu : <Fragment></Fragment>}
    </React.Fragment>
  );
};

const VideoContainer = styled(Grid)`
  padding: 1.5rem;
`;

const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
`;

const VideoLeftContainer = styled.div`
  width: 3rem;
`;

const VideoThumbnail = styled.img`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

const VideoRightContainer = styled.div`
  width: 100%;
  padding-left: 0.5rem;
`;

const VideoTitleText = styled.span`
  display: -webkit-flex;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 14;
  height: 3rem;
  line-height: 1.5rem;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;

  font-weight: bold;
  font-family: "NanumBarunGothic", sans-serif;
`;

export default VideoMenu;
