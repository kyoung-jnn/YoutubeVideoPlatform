import React, { useState, useEffect, Fragment } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import SearchBar from "./components/SearchBar.js";
import Home from "./components/Home.js";
import VideoDetail from "./components/VideoDetail_component/VideoDetail.js";
import VideoMenu from "./components/VideoMenu.js";
import SideBar from "./components/SideBar.js";

async function axiosInitialData(setMenuState) {
  await axiosPopularVideoList().then((videos) => {
    axiosChannelList(videos, setMenuState);
  });
}

async function axiosSearchData(searchKeyword, setMenuState) {
  await axiosSearchVideoList(searchKeyword).then((videos) => {
    axiosChannelList(videos, setMenuState);
  });
}

async function axiosPopularVideoList() {
  return axios
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
    })
    .then((videoData) => {
      return videoData.data.items;
    });
}

async function axiosSearchVideoList(searchKeyword) {
  return axios
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
    .then((videoData) => {
      return videoData.data.items;
    });
}

async function axiosChannelList(videos, setMenuState) {
  let channelList = [];
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

function App() {
  const [menuState, setMenuState] = useState({ videos: [], channels: [] });
  const history = useHistory();

  // VideoMenu에 인기 동영상 불러오기
  useEffect(() => {
    axiosInitialData(setMenuState);
  }, []);

  const handleBackToHome = () => {
    history.push(`/`);
  };

  const handleSubmit = (searchKeyword) => {
    history.push(`/`);
    axiosSearchData(searchKeyword, setMenuState);
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
                <Home></Home>
              </Fragment>
            )}
          ></Route>
          <Route
            path="/watch"
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
  justify-content: center;
`;

export default App;
