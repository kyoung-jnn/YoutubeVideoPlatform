import React, { useEffect, useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import MainVideo from "./MainVideo.js";
import SubVideo from "./SubVideo.js";
import queryString from "query-string";

const useStyles = makeStyles((theme) => ({
  App: { justifyContent: "center" },
  mainVideo: {
    padding: theme.spacing(2.2),
  },
  subVideos: {
    padding: theme.spacing(2),
  },
}));

const VideoDetail = (props) => {
  const [videos, setVideos] = useState([]);
  const [mainVideoId, setMainVideoId] = useState(null);

  useEffect(() => {
    const query = queryString.parse(props.location.search);
    const videoId = query.v;
    setMainVideoId(videoId);
  });

  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid className={classes.mainVideo} item xs={8}>
        <MainVideo mainVideoId={mainVideoId}></MainVideo>
      </Grid>
      <Grid className={classes.subVideos} item xs={3}>
        <SubVideo
          mainVideoId={mainVideoId}
          setMainVideoId={setMainVideoId}
        ></SubVideo>
      </Grid>
    </React.Fragment>
  );
}

export default VideoDetail;
