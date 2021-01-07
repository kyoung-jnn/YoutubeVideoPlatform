import React, { useState, useEffect } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";
import SearchBar from "./components/SearchBar.js";
import VideoDetail from "./components/VideoDetail.js";
import VideoMenu from "./components/VideoMenu.js";

const useStyles = makeStyles((theme) => ({
  App: { justifyContent: "center" },
}));

function App() {
  const [videos, setVideos] = useState([]); // 비디오들 정보 전부 저장
  const [currentVideo, setCurrentVideo] = useState(null); // id만 저장

  const history = useHistory();

  // componentDidMount
  // VideoMenu에 인기 동영상 불러오기
  useEffect(() => {
    console.log("videos", videos);
    console.log("currentVideo", currentVideo);
    axios
      .create({
        baseURL: "https://www.googleapis.com/youtube/v3/",
      })
      .get("/videos", {
        params: {
          part: "snippet,statistics,recordingDetails",
          chart: "mostPopular",
          maxResults: 12, // 가져올 동영상 개수
          regionCode: "kr",
          key: "AIzaSyAWgs3aZE3PyX2p0tL776GoBgMt3XNx71M", // api 키
        },
      })
      .then((results) => {
        const list = results.data.items;

        setVideos(list);
      });

    // axios
    //   .create({
    //     baseURL: "https://www.googleapis.com/youtube/v3/",
    //   })
    //   .get("/channels", {
    //     params: {
    //       part: "snippet.thumbnails",
    //       id: "UCZf4ZESHAIuRtZ-eoMSL97A",
    //       key: "AIzaSyAWgs3aZE3PyX2p0tL776GoBgMt3XNx71M", // api 키
    //     },
    //   })
    //   .then((results) => {
    //     console.log(results)
    //   });
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
          key: "AIzaSyA_6zSz_6DWbstFSBOs_4gncohnIsdAoXk", // api 키
          q: searchKeyword,
        },
      })
      .then((results) => {
        const list = results.data.items;

        setVideos(list);
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
      <Grid container xs={12} spacing={0} justify="space-around">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <VideoMenu
                videos={videos}
                onClickVideo={handleClick}
                {...props}
              ></VideoMenu>
            )}
          ></Route>
          <Route
            path="/videoDetail"
            render={(props) => <VideoDetail {...props}></VideoDetail>}
          ></Route>
        </Switch>
      </Grid>
    </Grid>
  );
}

export default App;
