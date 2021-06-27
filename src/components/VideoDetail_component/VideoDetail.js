import React, { useEffect, useState, Fragment } from "react";
import MainVideo from "./MainVideo.js";
import SubVideo from "./SubVideo.js";
import queryString from "query-string";

const VideoDetail = (props) => {
  const [mainVideoId, setMainVideoId] = useState(null);

  useEffect(() => {
    const query = queryString.parse(props.location.search);
    const videoId = query.v;

    setMainVideoId(videoId);
  }, []);

  return (
    <Fragment>
      <MainVideo mainVideoId={mainVideoId}></MainVideo>
      <SubVideo
        mainVideoId={mainVideoId}
        setMainVideoId={setMainVideoId}
      ></SubVideo>
    </Fragment>
  );
};

export default VideoDetail;
