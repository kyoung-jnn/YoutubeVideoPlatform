import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";
import SearchBar from "./components/SearchBar.js";
import VideoDetail from "./components/VideoDetail_component/VideoDetail.js";
import VideoMenu from "./components/VideoMenu.js";

function App() {
  const [menuState, setMenuState] = useState({ videos: [], channels: [] }); // 비디오들 정보 전부 저장
  const [currentVideo, setCurrentVideo] = useState(null); // id만 저장
  var channelList = [];

  const history = useHistory();

  // componentDidMount
  // VideoMenu에 인기 동영상 불러오기
  useEffect(() => {
    console.log("비디오 탐색");
    console.log(menuState);
    axios
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
      .then((results) => {
        const list = results.data.items;
        setMenuState({ videos: list, ...menuState });
      })
      .then(() => {
        console.log("채널 탐색");
        console.log(menuState);

        menuState.videos.map((video) => {
          let channelId = video.snippet.channelId;
          axios
            .create({
              baseURL: "https://www.googleapis.com/youtube/v3/",
            })
            .get("/channels", {
              params: {
                part: "snippet",
                id: { channelId },
                key: "AIzaSyAWgs3aZE3PyX2p0tL776GoBgMt3XNx71M", // api 키
              },
            })
            .then((results) => {
              channelList.push(results.data);
              if (channelList.length == 12) {
                console.log("채널 저장", channelList);
                setMenuState({ channels: channelList, ...menuState });
              }
            });
        });
      });
  }, []);

  const handleGoHome = () => {
    history.push(`/`);
  };
  // 검색을 했을 때
  const handleSubmit = async (searchKeyword) => {
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
    setCurrentVideo(clickVideoId);
    history.push(`/videoDetail?v=${clickVideoId}`);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <SearchBar onGoHome={handleGoHome} onSubmit={handleSubmit}></SearchBar>
      </Grid>
      <Grid container justify="space-around">
        <Switch>
          <Route
            exact
            path="/"
            // render={(props) => (
            //   <VideoMenu
            //     videos={videos}
            //     onClickVideo={handleClick}
            //     {...props}
            //   ></VideoMenu>
            // )}
          ></Route>
          {/* <Route
            path="/videoDetail"
            render={(props) => <VideoDetail {...props}></VideoDetail>}
          ></Route> */}
        </Switch>
      </Grid>
    </Grid>
  );
}

export default App;
