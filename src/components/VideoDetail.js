import React, { useEffect, useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import MainVideo from "./MainVideo.js";
import SubVideo from "./SubVideo.js";
import queryString from "query-string";

const useStyles = makeStyles((theme) => ({
  App: { justifyContent: "center" },
}));

function VideoDetail(props) {
  const [videos, setVideos] = useState([]);
  const [mainVideoId, setMainVideoId] = useState(null);

  const query = queryString.parse(props.location.search);
  const videoId = query.v;

  useEffect(() => {
    setMainVideoId(videoId);
  });

  return (
    <React.Fragment>
      <Grid item xs={6}>
        <MainVideo mainVideoId={mainVideoId}></MainVideo>
      </Grid>
      <Grid item xs={3}>
        {/* <SubVideo subVideos={videos} setMainVideo={setMainVideoId}></SubVideo> */}
      </Grid>
    </React.Fragment>
  );
}

export default VideoDetail;
