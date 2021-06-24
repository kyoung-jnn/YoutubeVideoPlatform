import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import SearchBar from "./components/SearchBar.js";
import VideoDetail from "./components/VideoDetail_component/VideoDetail.js";
import VideoMenu from "./components/VideoMenu.js";
import SideBar from "./components/SideBar.js";
import { Fragment } from "react";

async function axiosData(menuState, setMenuState) {
  let channelList = [];
  const videos = await axiosVideoList();

  videos.map((video) => {
    const channelId = video.snippet.channelId;
    axios
      .create({
        baseURL: "https://www.googleapis.com/youtube/v3/",
      })
      .get("/channels", {
        params: {
          id: channelId,
          part: "id,snippet",
          key: process.env.REACT_APP_YOUTUBE_API_KEY, // api 키
        },
      })
      .then((channel) => {
        channelList.push(channel);
        if (channelList.length === 12) {
          setMenuState({ videos: videos, channels: channelList });
        }
      });
  });
}

async function axiosVideoList() {
  const videoData = await axios
    .create({
      baseURL: "https://www.googleapis.com/youtube/v3/",
    })
    .get("/videos", {
      params: {
        part: "snippet,statistics,recordingDetails,contentDetails",
        chart: "mostPopular",
        maxResults: 12, // 가져올 동영상 개수
        regionCode: "kr",
        key: process.env.REACT_APP_YOUTUBE_API_KEY, // api 키
      },
    });
  return videoData.data.items;
}

function App() {
  const [menuState, setMenuState] = useState({ videos: [], channels: [] });
  const history = useHistory();

  // VideoMenu에 인기 동영상 불러오기
  useEffect(() => {
    axiosData(menuState, setMenuState);
  }, []);

  const handleBackToHome = () => {
    history.push(`/`);
  };

  const handleSubmit = (searchKeyword) => {
    history.push(`/`);

    axios
      .create({
        baseURL: "https://www.googleapis.com/youtube/v3/",
      })
      .get("/search", {
        params: {
          part: "snippet",
          maxResults: 12, // 가져올 동영상 개수
          key: process.env.REACT_APP_YOUTUBE_API_KEY, // api 키
          q: searchKeyword,
        },
      })
      .then((results) => {
        const list = results.data.items;

        setMenuState(list);
      });
  };

  // 동영상을 클릭했을 때
  const handleClick = (clickVideoId) => {
    history.push(`/watch?v=${clickVideoId}`);
  };

  return (
    <main>
      <SearchBar
        onGoHome={handleBackToHome}
        onSubmit={handleSubmit}
      ></SearchBar>
      <BottomContainer>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <SideBar></SideBar>
                <VideoMenu
                  videos={menuState.videos}
                  channels={menuState.channels}
                  onClickVideo={handleClick}
                  {...props}
                ></VideoMenu>
              </Fragment>
            )}
          ></Route>
          <Route
            path="/watch"
            render={(props) => <VideoDetail {...props}></VideoDetail>}
          ></Route>
        </Switch>
      </BottomContainer>
    </main>
  );
}

const BottomContainer = styled.section`
  display: flex;
  flex-direction: row;
`;

export default App;
