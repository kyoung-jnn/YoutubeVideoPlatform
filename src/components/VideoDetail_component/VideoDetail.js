import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import MainVideo from "./MainVideo.js";
import SubVideo from "./SubVideo.js";
import queryString from "query-string";

import styled from "styled-components";

const VideoDetail = (props) => {
  const [mainVideoId, setMainVideoId] = useState(null);

  useEffect(() => {
    const query = queryString.parse(props.location.search);
    const videoId = query.v;

    setMainVideoId(videoId);
  }, []);

  return (
    <React.Fragment>
      <MainVideoContainer>
        <MainVideo mainVideoId={mainVideoId}></MainVideo>
      </MainVideoContainer>
      {/* <Grid className={classes.subVideos} item xs={5}>
        <SubVideo
          mainVideoId={mainVideoId}
          setMainVideoId={setMainVideoId}
        ></SubVideo>
      </Grid> */}
    </React.Fragment>
  );
};

const MainVideoContainer = styled.section`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
`;

export default VideoDetail;
